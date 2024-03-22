import { Response } from 'express';

type ResponseBody = {
  success: boolean;
  message?: string;
  data?: any;
};

const sendResponse = (res: Response, status: number, { success, message = '', data = null }: ResponseBody) => {
  return res.status(status).json({ success, message, data });
};

export default sendResponse;
