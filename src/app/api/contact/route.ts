import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // Send email with reply-to set to patient's email
    await transporter.sendMail({
      from: `${name} <${process.env.SMTP_EMAIL}>`, // Uses our verified email but shows patient's name
      replyTo: email, // Patient's email for replies
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="margin: 20px 0;">
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 0.875rem;">
            * This email was sent from your website's contact form.
            You can reply directly to this email to reach the patient.
          </p>
        </div>
      `,
      headers: {
        "Reply-To": email,
      },
    });

    // Send confirmation email to patient
    await transporter.sendMail({
      from: `${process.env.CLINIC_NAME} <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">Thank You for Contacting Us</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Your message:</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 15px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #374151;"><strong>${
              process.env.CLINIC_NAME
            }</strong></p>
            <p style="color: #6b7280; margin: 5px 0;">
              ${process.env.CLINIC_ADDRESS}<br>
              Tel: ${process.env.CLINIC_PHONE}<br>
              Email: ${process.env.RECIPIENT_EMAIL}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      status: "success",
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
