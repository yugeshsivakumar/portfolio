export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { fullname, email, message } = req.body;

  // Validate input
  if (!fullname || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    // Use RESEND_API_KEY instead of VITE_RESEND_API_KEY
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'imyugesh.s@gmail.com',
        subject: `New Contact Form Message from ${fullname}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      res.status(200).json({ success: true, data: result });
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}