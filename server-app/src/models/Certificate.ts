import mongoose, { Document, Schema } from "mongoose";

interface ICertificate extends Document {
  user: mongoose.Schema.Types.ObjectId;
  event: mongoose.Schema.Types.ObjectId;
  certificateId: string;
  createdAt: Date;
}

const certificateSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  certificatId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Certificate = mongoose.model<ICertificate>("Certificate", certificateSchema);

export default Certificate;
