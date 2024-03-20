import mongoose, { Document, Schema } from "mongoose";

interface IEvent extends Document {
  eventName: string;
  description: string;
  organizer: mongoose.Schema.Types.ObjectId;
  titlePicture: string;
  pictures?: string[];
  topic: string;
  categories: string[];
  eventStartDateTime: Date;
  eventEndDateTime: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema: Schema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    titlePicture: {
      type: String,
      required: true,
    },
    pictures: [String],
    topic: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    eventStartDateTime: {
      type: Date,
      required: true,
    },
    eventEndDateTime: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model<IEvent>("Event", eventSchema);

export default Event;
