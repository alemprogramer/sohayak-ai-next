import { NextResponse } from "next/server";

export const revalidate = 0;

async function generateToken(instructions?: string) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not defined in environment variables");
  }

  const tokenSessionConfig = {
    session: {
      type: "realtime",
      model: "gpt-realtime",
      instructions: instructions || "You are a helpful AI assistant. You can speak Bangla and English.",
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
    throw new Error(`OpenAI API Error: ${errorText}`);
  }

  return response.json();
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const instructions = searchParams.get("instructions") || undefined;
    const data = await generateToken(instructions);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Token generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate token" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    let instructions: string | undefined;
    try {
      const body = await req.json();
      instructions = body.instructions;
    } catch {
      // Empty or invalid body
    }
    const data = await generateToken(instructions);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Token generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate token" },
      { status: 500 }
    );
  }
}
