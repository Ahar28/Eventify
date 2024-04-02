import mongoose, { Document, Schema } from "mongoose";

interface IBadge extends Document {
  user: mongoose.Schema.Types.ObjectId;
  badgeId: string;
  badgeType: string;
  createdAt: Date;
  eventsAttendedThreshold: number;
}

const badgeSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  badgeId: {
    type: String,
    required: true,
  },
  badgeType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  eventsAttendedThreshold: {
    type: Number,
    required: true,
  }
});

const Badge = mongoose.model<IBadge>("Badge", badgeSchema);

export default Badge;
