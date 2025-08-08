// app/api/livekit-webhook/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";  // your db connection helper
import CallSession from "@/models/CallSession";

export async function POST(req: Request) {
  await dbConnect();

  const event = await req.json();

  const { event: eventType, participant, room, timestamp } = event;

  if (!participant?.identity || !room || !timestamp) {
    return NextResponse.json({ message: "Invalid event data" }, { status: 400 });
  }

  try {
    if (eventType === "participant_joined") {
      // Create a new session or update if exists without leaveTime
      await CallSession.findOneAndUpdate(
        { userId: participant.identity, roomName: room, leaveTime: null },
        { $setOnInsert: { joinTime: new Date(timestamp) } },
        { upsert: true }
      );
    } else if (eventType === "participant_left") {
      // Update existing session with leaveTime
      await CallSession.findOneAndUpdate(
        { userId: participant.identity, roomName: room, leaveTime: null },
        { leaveTime: new Date(timestamp) }
      );
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook save error:", error);
    return NextResponse.json({ message: "Failed to save event" }, { status: 500 });
  }
}
