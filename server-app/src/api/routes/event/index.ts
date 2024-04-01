import express from "express";
import eventController from "../../controllers/event";
import { authenticateUser } from "../../../middlewares/auth";
import { addToWishlist, removeFromWishlist } from '../../controllers/event/wishlist';
const router = express.Router();

router.post("/create", eventController.createEvent);
router.put("/update", eventController.updateEvent);
router.delete("/delete", eventController.deleteEvent);
router.get("/organizer/:organizerId", eventController.getEventsByOrganizer);
router.get("/events-exclude-organizer/:organizerId",eventController.getEventsExcludingOrganizer);
router.post('/wishlist/add', addToWishlist);
router.delete('/wishlist/remove/:userId', removeFromWishlist);

export default router;