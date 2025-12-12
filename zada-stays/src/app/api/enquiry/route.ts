import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, message, apartmentName, apartmentLocation } = body;

    // Validate required fields
    if (!fullName || !phoneNumber || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || "info@zadastays.com",
      to: "zadastays@gmail.com",
      subject: `New Enquiry for ${apartmentName || "Apartment"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
              }
              .header {
                background-color: #1f2937;
                color: white;
                padding: 20px;
                border-radius: 5px 5px 0 0;
                margin: -20px -20px 20px -20px;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f9fafb;
                border-left: 3px solid #1f2937;
              }
              .label {
                font-weight: bold;
                color: #1f2937;
                margin-bottom: 5px;
              }
              .value {
                color: #4b5563;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Apartment Enquiry</h2>
              </div>
              
              <div class="field">
                <div class="label">Apartment Name:</div>
                <div class="value">${apartmentName || "N/A"}</div>
              </div>
              
              <div class="field">
                <div class="label">Location:</div>
                <div class="value">${apartmentLocation || "N/A"}</div>
              </div>
              
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value">${phoneNumber}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              
              ${message ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              ` : ""}
              
              <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
                This enquiry was submitted from the Zada Stays website.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Apartment Enquiry

Apartment Name: ${apartmentName || "N/A"}
Location: ${apartmentLocation || "N/A"}
Full Name: ${fullName}
Phone Number: ${phoneNumber}
Email: ${email}
${message ? `Message: ${message}` : ""}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again later." },
      { status: 500 }
    );
  }
}

