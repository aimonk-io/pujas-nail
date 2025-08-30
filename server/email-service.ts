import nodemailer from "nodemailer";

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "your-email@gmail.com",
      pass: process.env.EMAIL_PASS || "your-app-password",
    },
  });
};

export const sendAppointmentEmails = async (bookingData: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  discountCode?: string;
}) => {
  const { name, phone, email, service, date, time, message, discountCode } = bookingData;

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
    <h2>📅 Appointment Confirmation</h2>
    <p>Dear ${name},</p>
    <p>Thank you for booking an appointment with <strong>Puja's Nail Studio</strong>!</p>
    <p><strong>Your appointment details:</strong></p>
    <ul>
      <li><strong>Service:</strong> ${service}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Time:</strong> ${time}</li>
      ${discountCode && discountCode.toUpperCase() === "FIRST10C" ? `<li><strong>Discount:</strong> ✅ 10% off applied (First-time client special)</li>` : ""}
    </ul>
    <p>We will contact you shortly to confirm your appointment. If you need to make any changes, please call us at +91 8617682768.</p>
    <p>Looking forward to seeing you!</p>
    <p>Best regards,<br>Puja's Nail Studio Team</p>
  `;

  try {
    const transporter = createTransporter();
    
    // Send email to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: "pujabarmanb9@gmail.com",
      subject: `New Appointment Booking - ${name}`,
      html: businessEmailContent,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Appointment Confirmation - Puja's Nail Studio",
      html: clientEmailContent,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error };
  }
}; 