import express from "express";
import eventController from "../../controllers/event";
import { authenticateUser } from "../../../middlewares/auth";
const router = express.Router();

router.post("/create", eventController.createEvent);
router.put("/update", eventController.updateEvent);
router.delete("/delete", eventController.deleteEvent);
router.get("/organizer/:organizerId", eventController.getEventsByOrganizer);
router.get("/events-exclude-organizer/:organizerId",eventController.getEventsExcludingOrganizer);

export default router;