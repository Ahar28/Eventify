import { Request, Response } from 'express';
import sendResponse from '../../../utils/response';
import Wishlist from '../../../models/Wishlist';
import mongoose from 'mongoose';

export const addToWishlist = async (req: Request, res: Response) => {
  try {
    const { userId, eventId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(eventId)) {
      return sendResponse(res, 400, { success: false, message: "Invalid userId or eventId" });
    }

    let wishlist = await Wishlist.findOne({ user: userId });
    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, events: [] });
    } else {
      const eventExists = wishlist.events.find(event => event === eventId);
      if (eventExists) {
        return sendResponse(res, 400, { success: false, message: "Event already in wishlist" });
      }
    }

    wishlist.events.push(eventId);
    await wishlist.save();

    return sendResponse(res, 200, { success: true, data: wishlist });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return sendResponse(res, 500, { success: false, message: "Could not add to wishlist" });
  }
};


export const removeFromWishlist = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId; 
      const eventId = req.body.eventId; 
  
      const wishlist = await Wishlist.findOne({ user: userId });
      if (!wishlist) {
        return sendResponse(res, 404, { success: false, message: "Wishlist not found" });
      }
  
      wishlist.events = wishlist.events.filter(event => event.toString() !== eventId);
      await wishlist.save();
  
      return sendResponse(res, 200, { success: true, data: wishlist });
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      return sendResponse(res, 500, { success: false, message: "Could not remove from wishlist" });
    }
  };
  