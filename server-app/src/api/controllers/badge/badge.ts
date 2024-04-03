import { Request, Response } from 'express';
import sendResponse from '../../../utils/response';
import { checkAndGenerateBadge } from "../../services/badge";

export const generateBadge = async (req: Request, res: Response) => {
  try {
    await checkAndGenerateBadge(req.params.userId);
      sendResponse(res, 200, { success: true, message: "Badge check and generation process completed successfully." });
  } catch (error: any) {
      sendResponse(res, 400, { success: false, message: error.message });
  }
};
