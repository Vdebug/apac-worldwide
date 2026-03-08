import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "missing_key");
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Attempt to send email
    await resend.emails.send({
      from: "APAC Worldwide <notifications@apacworldwide.com>", 
      to: [process.env.CONTACT_EMAIL || "info@apacworldwide.com"],
      subject: `New Lead from ${name} - ${service}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error sending contact email:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to send application. Please try again." },
      { status: 500 }
    );
  }
}
