import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();
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
      <p><strong style="color: #F472B6;">Name:</strong> ${name}</p>
      <p><strong style="color: #F472B6;">Email:</strong> <a href="mailto:${email}" style="color: #93C5FD; text-decoration: none;">${email}</a></p>
      <p><strong style="color: #F472B6;">Message:</strong></p>
      <blockquote style="margin: 15px 0; padding-left: 15px; border-left: 3px solid #F472B6; color: #D1D5DB;">
        ${message.replace(/\n/g, '<br />')}
      </blockquote>
      <p style="margin-top: 40px; font-size: 0.9rem; color: #6B7280;">
        — Webpulse Contact System
      </p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
