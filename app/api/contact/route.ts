import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@apacworldwide.com";

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

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { ok: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification to APAC team using Resend
    const { data, error } = await resend.emails.send({
      from: "APAC Worldwide <onboarding@resend.dev>", // Using Resend testing domain for now until custom domain verified
      to: [CONTACT_EMAIL],
      subject: `New Lead: ${name} — ${service}`,
      html: buildNotificationHtml({ name, email, phone, service, message }),
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { ok: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error sending contact email:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to send. Please try again later." },
      { status: 500 }
    );
  }
}
