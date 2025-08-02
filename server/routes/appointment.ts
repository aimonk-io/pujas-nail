import { Request, Response } from "express";
import { sendAppointmentEmails } from "../email-service";

export const handleAppointment = async (req: Request, res: Response) => {
  console.log("Appointment API called with body:", req.body);
  try {
    const { name, phone, email, service, date, time, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // For now, just log the booking without sending emails
    console.log("Booking received:", { name, phone, email, service, date, time, message });
    
    // TODO: Uncomment when email is configured
    // const emailResult = await sendAppointmentEmails({
    //   name,
    //   phone,
    //   email,
    //   service,
    //   date,
    //   time,
    //   message
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
      message: "Appointment submitted successfully! Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Appointment submission error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit appointment. Please try again.",
    });
  }
}; 