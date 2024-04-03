import Badge from "../../models/Badge";
import Registration from "../../models/Registration";

const badgeTypes = ["Bronze Attendee", "Silver Attendee", "Gold Attendee"];

export const generateBadgeForUser = async (userId: string) => {
  const eventCount = await Registration.countDocuments({ user: userId, status: "CONFIRMED" });
  console.log("eventCount", eventCount);

  let badgeType = null;
  if(eventCount >= 10 && eventCount < 20) badgeType = badgeTypes[1]; // Silver
  else if(eventCount >= 20) badgeType = badgeTypes[2]; // Gold
  else if(eventCount >= 2) badgeType = badgeTypes[0]; // Bronze

  if(badgeType) {
    const existingBadge = await Badge.findOne({ user: userId, badgeType });
    if (!existingBadge) {
      const newBadge = new Badge({ user: userId, badgeType });
      await newBadge.save();
      return newBadge;
    }
    else {
      console.log("User already has this badge");
      return existingBadge;
    }
  }

  return null;
};
