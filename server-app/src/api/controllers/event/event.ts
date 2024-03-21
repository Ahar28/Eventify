import { Request, Response } from "express";
import Event from "../../../models/Event";
import sendResponse from "../../../utils/response";

export const createEvent = async (req: Request, res: Response) => {
  const {
    eventName,
    organizer,
    details,
    titlePicture,
    pictures,
    topic,
    categories,
    eventStartDateTime,
    eventEndDateTime,
    isPaidEvent,
    price,
  } = req.body;

  if (
    !eventName ||
    !organizer ||
    !details ||
    !topic ||
    !categories ||
    !eventStartDateTime ||
    !eventEndDateTime
  ) {
    return sendResponse(res, 400, {
      success: false,
      message: "Missing required fields",
    });
  }

  if (isPaidEvent && (price === undefined || price < 0)) {
    return sendResponse(res, 400, {
      success: false,
      message: "Invalid price for paid event",
    });
  }

  try {
    const existingEvent = await Event.findOne({ eventName, organizer });
    if (existingEvent) {
      return sendResponse(res, 400, {
        success: false,
        message: "An event with the same name and organizer already exists",
      });
    }

    const newEvent = new Event({
      eventName,
      organizer,
      details,
      titlePicture,
      pictures,
      topic,
      categories,
      eventStartDateTime,
      eventEndDateTime,
      isActive: true,
      isPaidEvent,
      price,
    });

    await newEvent.save();

    return sendResponse(res, 201, {
      success: true,
      message: "Event created successfully",
      data: newEvent,
    });
  } catch (error) {
    console.error("Create Event Error:", error);
    return sendResponse(res, 500, {
      success: false,
      message: "Server error while creating event",
    });
  }
};
