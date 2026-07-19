import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not defined in environment variables");
    }

    const tokenSessionConfig = {
      session: {
        type: "realtime",
        model: "gpt-realtime",
        instructions: "You are a helpful AI assistant. You can speak Bangla and English.",
        audio: {
          output: {
            voice: "marin",
          },
        },
      },
    };

    const response = await fetch(
      "https://api.openai.com/v1/realtime/client_secrets",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tokenSessionConfig),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI Token API Error:", response.status, errorText);
      return NextResponse.json(
        { error: "OpenAI API Error", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Token generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate token" },
      { status: 500 }
    );
  }
}
