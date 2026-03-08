import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.office365.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER || "info@apacworldwide.com";
const SMTP_PASS = process.env.SMTP_PASS || "";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@apacworldwide.com";

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
}

function buildNotificationHtml(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#05120e;border-radius:16px;overflow:hidden;margin-top:24px;margin-bottom:24px">
    <div style="padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.08)">
      <h1 style="margin:0;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#c5a059">New Lead Received</h1>
    </div>
    <div style="padding:32px 40px">
      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#c5a059;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;width:120px;vertical-align:top">Name</td>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#ffffff;font-size:15px">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#c5a059;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;width:120px;vertical-align:top">Email</td>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#ffffff;font-size:15px"><a href="mailto:${data.email}" style="color:#ffffff;text-decoration:underline">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#c5a059;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;width:120px;vertical-align:top">Phone</td>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#ffffff;font-size:15px">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#c5a059;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;width:120px;vertical-align:top">Service</td>
          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#ffffff;font-size:15px">${data.service}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;color:#c5a059;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;width:120px;vertical-align:top">Message</td>
          <td style="padding:12px 0;color:#ffffff;font-size:15px;line-height:1.6">${data.message.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
    </div>
    <div style="padding:20px 40px;background:rgba(255,255,255,0.03);border-top:1px solid rgba(255,255,255,0.06)">
      <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:1px">Sent from apacworldwide.com contact form • ${new Date().toUTCString()}</p>
    </div>
  </div>
</body>
</html>`;
}

function buildConfirmationHtml(name: string) {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  <div style="max-width:600px;margin:0 auto;background:#05120e;border-radius:16px;overflow:hidden;margin-top:24px;margin-bottom:24px">
    <div style="padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.08)">
      <h1 style="margin:0;font-size:18px;font-weight:300;color:#ffffff;font-family:Georgia,'Times New Roman',serif">APAC <span style="color:#c5a059">Worldwide</span></h1>
    </div>
    <div style="padding:40px">
      <h2 style="margin:0 0 20px;font-size:26px;font-weight:300;color:#ffffff;font-family:Georgia,'Times New Roman',serif">Thank you, ${firstName}</h2>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.7);font-weight:300">
        We have received your consultation request successfully. One of our advisors will review your requirements and get back to you within <strong style="color:#ffffff">one business day</strong>.
      </p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.7);font-weight:300">
        All future communication will come from this email address — <strong style="color:#c5a059">info@apacworldwide.com</strong>. Please save this contact to ensure our messages reach your inbox.
      </p>
      <div style="margin:28px 0;padding:20px 24px;background:rgba(197,160,89,0.06);border:1px solid rgba(197,160,89,0.15);border-radius:12px">
        <p style="margin:0;font-size:13px;line-height:1.6;color:rgba(255,255,255,0.6)">
          <strong style="color:#c5a059">What happens next?</strong><br>
          Our team will study your requirements, prepare a tailored recommendation, and schedule a discovery call at a time that works for you.
        </p>
      </div>
      <p style="margin:24px 0 0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.7);font-weight:300">
        In the meantime, feel free to explore our <a href="https://apacworldwide.com/blog" style="color:#c5a059;text-decoration:underline">market guides</a> for practical insights on UAE business setup.
      </p>
    </div>
    <div style="padding:20px 40px;background:rgba(255,255,255,0.03);border-top:1px solid rgba(255,255,255,0.06)">
      <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:0.5px">
        APAC Worldwide • Dubai, UAE<br>
        This is an automated confirmation. Please do not reply directly to this email.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // 1. Send notification to APAC team
    await transporter.sendMail({
      from: `"APAC Worldwide" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      subject: `New Lead: ${name} — ${service}`,
      html: buildNotificationHtml({ name, email, phone, service, message }),
    });

    // 2. Send confirmation to the person who filled the form
    await transporter.sendMail({
      from: `"APAC Worldwide" <${SMTP_USER}>`,
      to: email,
      subject: "We've received your request — APAC Worldwide",
      html: buildConfirmationHtml(name),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error sending contact email:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to send. Please try again or email us directly at info@apacworldwide.com." },
      { status: 500 }
    );
  }
}
