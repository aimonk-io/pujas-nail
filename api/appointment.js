import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, phone, email, service, date, time, message, discountCode } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Process discount code
    let discountApplied = false;
    let discountMessage = "";
    
    if (discountCode) {
      if (discountCode.toUpperCase() === "FIRST10C") {
        discountApplied = true;
        discountMessage = "✅ First-time client discount (10% off) applied!";
      } else {
        discountMessage = "❌ Invalid discount code. Please check and try again.";
      }
    }

    // Log the booking
    console.log("Booking received:", { 
      name, 
      phone, 
      email, 
      service, 
      date, 
      time, 
      message, 
      discountCode,
      discountApplied 
    });

    // Email configuration (optional - only if credentials are available)
    let transporter = null;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter = nodemailer.createTransporter({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    // Email content for the business owner
    const businessEmailContent = `
      <h2>🎉 New Appointment Booking!</h2>
      <p><strong>Client Details:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
        ${discountCode ? `<li><strong>Discount Code:</strong> ${discountCode} ${discountCode.toUpperCase() === "FIRST10C" ? "✅ (10% off applied)" : "❌ (Invalid code)"}</li>` : ""}
      </ul>
      <p><em>This booking was submitted from your website.</em></p>
    `;

    // Email content for the client (confirmation)
    const clientEmailContent = `
      <h2>📅 Appointment Request Confirmation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for requesting an appointment with <strong>Puja's Nail Studio</strong>!</p>
      <p><strong>Your appointment details:</strong></p>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        ${discountCode && discountCode.toUpperCase() === "FIRST10C" ? `<li><strong>Discount:</strong> ✅ 10% off applied (First-time client special)</li>` : ""}
      </ul>
      <p>We will contact you within 24 hours to confirm your appointment. If you need to make any changes, please call us at +91 8617682768.</p>
      <p>Looking forward to seeing you!</p>
      <p>Best regards,<br>Puja's Nail Studio Team</p>
    `;

    // Send emails if email credentials are configured
    if (transporter && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        // Send email to business owner
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: "pujabarmanb9@gmail.com",
          subject: `New Appointment Request - ${name}`,
          html: businessEmailContent,
        });

        // Send confirmation email to client
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Appointment Request Confirmation - Puja's Nail Studio",
          html: clientEmailContent,
        });

        console.log("Emails sent successfully");
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Continue with success response even if email fails
      }
    } else {
      console.log("Email credentials not configured, skipping email sending");
    }

    // Return success response
    res.json({
      success: true,
      message: discountApplied 
        ? `Appointment request submitted successfully! ${discountMessage} We'll contact you within 24 hours to confirm.`
        : discountCode 
          ? `Appointment request submitted successfully! ${discountMessage} We'll contact you within 24 hours to confirm.`
          : "Appointment request submitted successfully! We'll contact you within 24 hours to confirm.",
    });

  } catch (error) {
    console.error("Appointment submission error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit appointment request. Please try again.",
    });
  }
} 