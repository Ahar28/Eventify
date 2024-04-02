import express from "express";
import eventController from "../../controllers/event";
const router = express.Router();

router.post("/create", eventController.createEvent);
router.put("/update", eventController.updateEvent);
router.delete("/delete", eventController.deleteEvent);
router.get("/organizer/:organizerId", eventController.getEventsByOrganizer);
router.get("/:eventId", eventController.getEventById);

export default router;