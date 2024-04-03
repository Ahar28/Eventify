// server-app/src/utils/certificate.ts
import PDFDocument from 'pdfkit';
import User from '../models/User';
import Event from '../models/Event';
import { Request, Response } from 'express';

export const generateAndDownloadCertificate = async (req: Request, res: Response) => {
    const { userId, eventId } = req.params;

    try {
        const user = await User.findById(userId);
        const event = await Event.findById(eventId);

        if (!user || !event) {
            return res.status(404).send("User or event not found.");
        }

        console.log("Generating certificate for:", user.firstName, user.lastName, event.eventName, event.eventStartDateTime.toDateString());
        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="certificate-${userId}-${eventId}.pdf"`);

        doc.pipe(res);
        doc.fontSize(24).text('CERTIFICATE OF COMPLETION', { align: 'center' });
        doc.moveDown();
        doc.fontSize(18).text(`This certifies that ${user.firstName} ${user.lastName}`, { align: 'center' });
        doc.moveDown();
        doc.text(`has participated in the "${event.eventName}" on ${event.eventStartDateTime.toDateString()}.`, { align: 'center' });
        doc.end();

    } catch (error) {
        console.error('Certificate Generation Error:', error);
        res.status(500).send("An error occurred while generating the certificate.");
    }
};
