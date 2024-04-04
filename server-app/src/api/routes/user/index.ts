/**
 * Author: Bhavisha Oza
 * Banner ID: B00935827
 */
import express from "express";
import userController from "../../controllers/user/index";
const router = express.Router();

router.put("/update/:userId", userController.updateUser);

export default router;
