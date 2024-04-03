import fs from 'fs';
import PDFDocument from 'pdfkit';
import User from "../../models/User";
import Event from '../../models/Event';
import Certificate from '../../models/Certificate';
import { sendEmail } from '../../utils/mailer';

async function checkAndGenerateCertificate(userId: string, eventId: string) {
  const user = await User.findById(userId);
  const event = await Event.findById(eventId);

  if (!user || !event) {
    throw new Error('User or event not found');
  }

  const certificate = new Certificate({
    user: userId,
    event: eventId,
    certificateId: `CERT-${userId}-${eventId}`,
  });

  // Generate certificate PDF
  const doc = new PDFDocument;
  const certificatePath = `../../certificates/certificate-${userId}-${eventId}.pdf`;
  doc.pipe(fs.createWriteStream(certificatePath));

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

  doc.text('Signature', 100, 500);
  doc.end();

  await certificate.save();
  console.log(`Certificate for event ${eventId} awarded to user ${userId}.`);

  if (user && user.email) {
      const emailSubject = 'Congratulations on your new badge!';
      const emailBody = `<p>Dear ${user.firstName},</p><p>Congratulations on earning a new certificate in our platform! Keep attending events to earn more certificates.</p><p>Best,</p><p>Your Team</p>`;
      await sendEmail(user.email, emailSubject, emailBody);
  }
}

export { checkAndGenerateCertificate };
