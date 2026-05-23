const HERMES_URL = 'https://herm.sharkmastertest.cfd';
const HERMES_TOKEN = 'SPfTKralXOjw-BRHkzbC57e_qkNbITKG5Y0K6Di9YRI';

const SYSTEM_PROMPT =
  'You are the Querent AI assistant. Querent is an AI automation agency that builds custom AI agents and automation systems for operations-heavy teams. Services: concierge agents, workflow automation, lead gen automation, internal ops automation, and strategic advisory. Answer questions about Querent\'s services, pricing philosophy (custom quotes), process (discovery call -> proposal -> build -> deploy), and help visitors book a demo. When someone wants to book a demo, respond with a message ending in exactly: [BOOK_DEMO]';

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

  let { message, session_id } = body || {};

  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }

  // Create session if not provided
  if (!session_id) {
    try {
      const sessionRes = await fetch(`${HERMES_URL}/api/sessions`, {
        method: 'POST',
        headers: {
          'X-Dashboard-Token': HERMES_TOKEN,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      if (!sessionRes.ok) throw new Error(`session ${sessionRes.status}`);
      const sessionData = await sessionRes.json();
      session_id = sessionData.session_id;
    } catch (err) {
      console.error('session creation failed:', err);
      return res.status(502).json({ error: 'Failed to create session' });
    }
  }

  // Prepend system context to first message
  const fullMessage = `${SYSTEM_PROMPT}\n\nUser: ${message}`;

  const params = new URLSearchParams({
    session_id,
    message: fullMessage,
  });

  const hermesUrl = `${HERMES_URL}/api/chat/stream?${params.toString()}`;

  let hermesRes;
  try {
    hermesRes = await fetch(hermesUrl, {
      method: 'GET',
      headers: {
        'X-Dashboard-Token': HERMES_TOKEN,
        Accept: 'text/event-stream',
      },
    });
  } catch (err) {
    console.error('hermes fetch failed:', err);
    return res.status(502).json({ error: 'upstream_unavailable' });
  }

  if (!hermesRes.ok) {
    console.error('hermes error status:', hermesRes.status);
    return res.status(502).json({ error: 'upstream_error' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Session-Id', session_id);

  // Pipe SSE stream from Hermes to client
  const reader = hermesRes.body.getReader();
  const decoder = new TextDecoder();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      res.write(chunk);
    }
  } catch (err) {
    console.error('stream error:', err);
    res.write('data: {"type":"error","message":"Stream interrupted"}\n\n');
  } finally {
    res.end();
  }
}
