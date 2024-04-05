/**
 * Author: Bhavisha Oza
 * Banner ID: B00935827
 */
import { Request, Response } from "express";
import User from "../../../models/User";
import sendResponse from "../../../utils/response";
import { sendEmail as emailSender } from "../../../utils/mailer";

interface UpdateRequestBody {
  firstName?: string;
  lastName?: string;
  bio?: string;
}

export const updateUser = async (
  req: Request<{ userId: string }, {}, UpdateRequestBody>,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, bio } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return sendResponse(res, 404, {
        success: false,
        message: "User not found",
      });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (bio) user.bio = bio;

    const updatedUser = await user.save();

    return sendResponse(res, 200, {
      success: true,
      message: "User updated successfully",
      data: {
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        bio: updatedUser.bio,
      },
    });
  } catch (error) {
    console.error("Update User Error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Failed to update user",
    });
  }
};


export const sendEmail= async (
  req: Request<{ email: string,subject: string, body: string}, {}>,
  res: Response
) => {
  try {
    const { email, subject, body } = req.body;

    if (!email || !body) {
      return sendResponse(res, 404, {
        success: false,
        message: "Email or body not found",
      });
    }

    emailSender(email, subject, body)

    return sendResponse(res, 200, {
      success: true,
      message: "Email sent successfully",
      data: {
        email: email,
      },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Failed to send email",
    });
  }
};
