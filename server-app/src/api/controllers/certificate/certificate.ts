import { Request, Response } from 'express';
import { checkAndGenerateCertificate } from '../../services/certificate';
import sendResponse from '../../../utils/response';

export const generateCertificate = async (req: Request, res: Response) => {
  try {
    const { userId, eventId } = req.body;
    const certificate = await checkAndGenerateCertificate(userId, eventId);
    sendResponse(res, 200, { success: true, data: certificate, message: 'Certificate generated and emailed successfully.' });
  } catch (error: any) {
    console.error('Error generating certificate:', error.message);
    sendResponse(res, 500, { success: false, message: error.message });
  }
};
