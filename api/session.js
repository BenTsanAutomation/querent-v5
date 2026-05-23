const HERMES_URL = 'https://herm.sharkmastertest.cfd';
const HERMES_TOKEN = 'SPfTKralXOjw-BRHkzbC57e_qkNbITKG5Y0K6Di9YRI';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(`${HERMES_URL}/api/sessions`, {
      method: 'POST',
      headers: {
        'X-Dashboard-Token': HERMES_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`Hermes session error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json({ session_id: data.session_id });
  } catch (err) {
    console.error('session error:', err);
    return res.status(500).json({ error: 'Failed to create session' });
  }
}
