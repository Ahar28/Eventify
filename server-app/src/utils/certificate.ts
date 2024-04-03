// Example using Express and pdfkit for PDF generation
import PDFDocument from 'pdfkit';
import User from "../models/User";
import Event from '../models/Event';
import { Request, Response } from 'express';

export const generateAndDownloadCertificate = (req: Request, res: Response) => {
    const { userId, eventId } = req.params;

    const user = User.findById(userId).exec();
    const event = Event.findById(eventId).exec();

    // Set up the PDF document
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="certificate-${userId}-${eventId}.pdf"`);

    // Pipe the PDF into the response
    doc.pipe(res);

    // Add content to the PDF
    doc.rect(50, 50, 500, 700).stroke();

    doc.fontSize(24)
      .text('CERTIFICATE OF COMPLETION', 100, 100, { align: 'center' });

    doc.fontSize(18)
        .text(`This is to certify that`, 100, 200)
        .moveDown(0.5)
        .text(`${user.firstName} ${user.lastName}`, { align: 'center' })
        .moveDown(0.5)
        .text(`Has successfully completed/participated in`, 100, 300)
        .moveDown(0.5)
        .text(`${event.eventName}`, { align: 'center' })
        .moveDown(0.5)
        .text(`held on ${event.eventStartDateTime}`, 100, 400);

    // Finalize the PDF and end the stream
    doc.end();
};
