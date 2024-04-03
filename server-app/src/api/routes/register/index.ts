import express from "express";
//import eventController from "../../controllers/eventregister";
import eventregisterController from "../../controllers/eventregister/index";
import { authenticateUser } from "../../../middlewares/auth";
const router = express.Router();

router.post("/create", eventregisterController.createEventRegistration);

export default router;