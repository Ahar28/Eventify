import express from "express";
import badgeController from '../../controllers/badge/index';

const router = express.Router();

router.post('/badge/generate/:userId', badgeController.generateBadge);

export default router;
