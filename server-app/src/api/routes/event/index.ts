import express from "express";
import eventController from "../../controllers/event";
import eventAnalyticsController from "../../controllers/analytics";
const router = express.Router();

router.post("/create", eventController.createEvent);
router.put("/update", eventController.updateEvent);
router.delete("/delete", eventController.deleteEvent);
router.get("/organizer/:organizerId", eventController.getEventsByOrganizer);
router.get("/event-data", eventAnalyticsController.getEventData);

export default router;
