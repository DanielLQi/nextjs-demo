import Event from "@/src/database/event.model";
import connectDB from "@/src/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const event = await req.json();

        const createdEvent = await Event.create(event);

        return NextResponse.json({ message: "Event created successfully", event: createdEvent }, { status: 201 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Event Creation Failed", error: e instanceof Error ? e.message : "Unknown" }, { status: 500 });
    }
}