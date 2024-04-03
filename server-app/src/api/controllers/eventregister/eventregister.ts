import { Request, Response } from "express";
import Registration from "../../../models/Registration";
import sendResponse from "../../../utils/response";
import mongoose from "mongoose";

export const createEventRegistration = async (req: Request, res: Response) => {
    const { userId, eventId, participants } = req.body;
  
    if (!userId || !eventId) {
      return sendResponse(res, 400, {
        success: false,
        message: "User ID and Event ID are required",
      });
    }
  
    try {
  
      const registration = new Registration({
        user: userId,
        event: eventId,
        participants: participants,
        status: "PENDING", 
        registrationDate: new Date(),
        paymentStatus: "PENDING", 
        amountPaid: 0, // Update with actual amount after payment process
      });
  
      await registration.save();
  
      return sendResponse(res, 201, {
        success: true,
        message: "Registration successful",
        data: registration,
      });
    } catch (error) {
      console.error("Registration Error:", error);
      return sendResponse(res, 500, {
        success: false,
        message: "Server error while registering for the event",
      });
    }
  };