import { Request, Response } from "express";
import { sendAppointmentEmails } from "../email-service";

export const handleAppointment = async (req: Request, res: Response) => {
  console.log("Appointment API called with body:", req.body);
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

    // For now, just log the booking without sending emails
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
    
    // TODO: Uncomment when email is configured
    // const emailResult = await sendAppointmentEmails({
    //   name,
    //   phone,
    //   email,
    //   service,
    //   date,
    //   time,
    //   message,
    //   discountCode
    // });

    // if (!emailResult.success) {
    //   console.error("Email sending failed:", emailResult.error);
    //   return res.status(500).json({
    //     success: false,
    //     message: "Failed to send confirmation emails. Please try again.",
    //   });
    // }

    res.json({
      success: true,
      message: discountApplied 
        ? `Appointment submitted successfully! ${discountMessage} Check your email for confirmation.`
        : discountCode 
          ? `Appointment submitted successfully! ${discountMessage} Check your email for confirmation.`
          : "Appointment submitted successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Appointment submission error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit appointment. Please try again.",
    });
  }
}; 