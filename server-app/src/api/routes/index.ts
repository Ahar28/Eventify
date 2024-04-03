import express from "express";
const router = express.Router();
import auth from "./auth";
import event from "./event";
import payment from "./payment";
import user from "./user";
import badge from "./badge";
import certificate from "./certificate";

router.use("/auth", auth);
router.use("/event", event);
router.use("/payment", payment);
router.use("/user", user);
router.use("/badge", badge);
router.use("/certificate", certificate);

export default router;
