import express from "express";
const router = express.Router();
import auth from "./auth";
import event from "./event";

router.use("/auth", auth);
router.use("/event/", event)

export default router;
