import Badge from "../../models/Badge";
import User from "../../models/User";
import Event from "../../models/Event";
import { sendEmail } from '../../utils/mailer';

interface BadgeCriteria {
    threshold: number;
    badgeType: string;
}

const badgeCriteria: BadgeCriteria[] = [
    { threshold: 5, badgeType: "Bronze Attendee" },
    { threshold: 10, badgeType: "Silver Attendee" },
    { threshold: 20, badgeType: "Gold Attendee" },
];

export const checkAndGenerateBadge = async (userId: string) => {
const userEvents = await Event.find({ "attendees.user": userId }).countDocuments();
const userBadges = await Badge.find({ user: userId });

const earnedBadgeTypes = new Set(userBadges.map((badge: typeof Badge) => badge.badgeType));
for (const criteria of badgeCriteria) {
    if (userEvents >= criteria.threshold && !earnedBadgeTypes.has(criteria.badgeType)) {
        const newBadge = new Badge({
            user: userId,
            badgeId: `BADGE-${userId}-${criteria.badgeType}`,
            badgeType: criteria.badgeType,
            eventsAttendedThreshold: criteria.threshold,
        });
        await newBadge.save();

        const user = await User.findById(userId);
        if (user && user.email) {
            const emailSubject = 'Congratulations on your new badge!';
            const emailBody = `<p>Dear ${user.name},</p><p>Congratulations on earning a new badge in our platform! Keep attending events to earn more badges.</p><p>Best,</p><p>Your Team</p>`;
            await sendEmail(user.email, emailSubject, emailBody);
        }
    }
}
};
