import nodemailer from 'nodemailer';

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, currentWebsite } = body;

  // Honeypot spam filter
  if (currentWebsite && currentWebsite.trim() !== '') {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Webpulse Contact Form" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `Webpulse - New Message from ${name}`,
    html: `
      <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: auto; background-color: #111827; color: #F3F4F6; padding: 30px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.2);">
        <h2 style="color: #38BDF8; border-bottom: 1px solid #1F2937; padding-bottom: 10px; margin-bottom: 20px;">
          💌 New Message via Webpulse
        </h2>
        <p><strong style="color: #F472B6;">Name:</strong> ${escapeHtml(
          name
        )}</p>
        <p><strong style="color: #F472B6;">Email:</strong> <a href="mailto:${escapeHtml(
          email
        )}" style="color: #93C5FD; text-decoration: none;">${escapeHtml(
      email
    )}</a></p>
        <p><strong style="color: #F472B6;">Message:</strong></p>
        <blockquote style="margin: 15px 0; padding-left: 15px; border-left: 3px solid #F472B6; color: #D1D5DB;">
          ${escapeHtml(message).replace(/\n/g, '<br />')}
        </blockquote>
        <p style="margin-top: 40px; font-size: 0.9rem; color: #6B7280;">
          — Webpulse Contact System
        </p>
      </div>
    `,
  };

  const confirmOptions = {
    from: `"Webpulse Designs" <${process.env.MAIL_USER}>`,
    to: email,
    subject: `Thanks for contacting Webpulse, ${name}!`,
    html: `
      <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: auto; background-color: #1f2937; color: #f3f4f6; padding: 30px; border-radius: 10px;">
        <h2 style="color: #f472b6;">Hi ${escapeHtml(name)},</h2>
        <p>Thanks for reaching out! I’ve received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 3px solid #f472b6; padding-left: 15px; color: #d1d5db;">
          ${escapeHtml(message).replace(/\n/g, '<br />')}
        </blockquote>
        <p style="margin-top: 30px; color: #9ca3af;">— Ryan @ Webpulse</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions); // 🔹 Admin copy
    await transporter.sendMail(confirmOptions); // ✅ Only send if admin email worked
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email error:', error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
