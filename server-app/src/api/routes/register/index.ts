import express from "express";
import eventregisterController from "../../controllers/eventregister/index";
import { authenticateUser } from "../../../middlewares/auth";
const router = express.Router();

router.post("/create", eventregisterController.createEventRegistration);
router.delete("/delete/:registrationId", eventregisterController.deleteEventRegistration);

export default router;