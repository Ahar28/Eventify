import express from "express";
const router = express.Router();
import auth from "./auth";
import event from "./event";
import payment from "./payment";

router.use("/auth", auth);
router.use("/event/", event);
router.use("/payment", payment);

export default router;
