import express from 'express';
import certificateController from '../../controllers/certificate/index';

const router = express.Router();

router.post('/certificate/generate', certificateController.generateCertificate);

export default router;
