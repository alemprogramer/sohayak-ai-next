import mongoose, { Schema, model, models } from "mongoose";

const callSessionSchema = new Schema({
  userId: { type: String, required: true },      // participant.identity
  roomName: { type: String, required: true },
  joinTime: { type: Date, required: true },
  leaveTime: { type: Date },                      // nullable, when user leaves
}, { timestamps: true });

const CallSession = models.CallSession || model("CallSession", callSessionSchema);

export default CallSession;
