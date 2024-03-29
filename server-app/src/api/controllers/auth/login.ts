import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import sendResponse from "../../../utils/response";
import User from "../../../models/User";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const login = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 401, {
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendResponse(res, 401, {
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.BCRYPT_SECRET_KEY as string, {
      expiresIn: "30d",
    });

    return sendResponse(res, 200, {
      success: true,
      message: "Login successful",
      data: {
        token,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        userId: user._id,
      },
    });
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, { success: false, message: "Login failed" });
  }
};

export const register = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response
) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 400, {
        success: false,
        message: "User already exists with the given email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return sendResponse(res, 200, {
      success: true,
      message: "User registered successfully",
      data: {
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        userId: savedUser._id,
      },
    });
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, {
      success: false,
      message: "Registration failed",
    });
  }
};
