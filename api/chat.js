const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_URL = 'https://api.deepseek.com/v1/chat/completions';

const SYSTEM_PROMPT =
  "You are the Querent AI assistant. Querent is an AI automation agency that builds custom AI agents and automation systems for operations-heavy teams. Services: concierge agents, workflow automation, lead gen automation, internal ops automation, and strategic advisory. Answer questions about Querent's services, pricing philosophy (custom quotes), process (discovery call -> proposal -> build -> deploy), and help visitors book a demo. When someone wants to book a demo, respond with a message ending in exactly: [BOOK_DEMO]";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const { message, messages: history } = body || {};

  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }

  // Build messages: system prompt + prior history + current user message
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...(Array.isArray(history) ? history : []),
    { role: 'user', content: message },
  ];

  let deepseekRes;
  try {
    deepseekRes = await fetch(DEEPSEEK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        stream: true,
      }),
    });
  } catch (err) {
    console.error('deepseek fetch failed:', err);
    return res.status(502).json({ error: 'upstream_unavailable' });
  }

  if (!deepseekRes.ok) {
    const errText = await deepseekRes.text();
    console.error('deepseek error:', deepseekRes.status, errText);
    return res.status(502).json({ error: 'upstream_error' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const reader = deepseekRes.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop(); // keep incomplete line

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const json = trimmed.slice(5).trim();
        if (json === '[DONE]') {
          res.write('data: {"type":"done"}\n\n');
          continue;
        }
        let chunk;
        try { chunk = JSON.parse(json); } catch { continue; }
        const delta = chunk.choices?.[0]?.delta?.content;
        if (delta != null) {
          res.write(`data: ${JSON.stringify({ type: 'delta', text: delta })}\n\n`);
        }
      }
    }
  } catch (err) {
    console.error('stream error:', err);
    res.write('data: {"type":"error","message":"Stream interrupted"}\n\n');
  } finally {
    res.end();
  }
}
