import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are Nexora AI, a helpful AI assistant.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI server error" },
      { status: 500 }
    );
  }
}
"use client";

import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage
