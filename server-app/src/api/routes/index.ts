import express from "express";
const router = express.Router();
import auth from "./auth";
import event from "./event";
import payment from "./payment";
import user from "./user";

router.use("/auth", auth);
router.use("/event", event);
router.use("/payment", payment);
router.use("/user", user);

export default router;
