import { generateAnalyticsToken } from '@/lib/generateAnalyticsToken'
import { NextRequest, NextResponse } from 'next/server'


const API_KEY = process.env.LIVEKIT_API_KEY!;
const API_SECRET = process.env.LIVEKIT_API_SECRET!;
const LIVEKIT_URL = process.env.LIVEKIT_URL
const PROJECT_ID = 'p_2yf59vrspkd'


async function listLiveKitSessions(token: any) {
  const endpoint = `https://cloud-api.livekit.io/api/project/${PROJECT_ID}/sessions/`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // console.log("🚀 ~ listLiveKitSessions ~ response:", response)
    // if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    console.log(data); // or do whatever you like here
  } catch (error: any) {
    console.log('There was a problem:', error.message);
  }
}


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const room = searchParams.get('room')
  const participant = searchParams.get('participant')
  const token = await generateAnalyticsToken(API_KEY, API_SECRET)
  console.log("🚀 ~ GET ~ token:", token)
  // const response = listLiveKitSessions(token)

  const endpoint = `https://cloud-api.livekit.io/api/project/${PROJECT_ID}/sessions/`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // console.log("🚀 ~ listLiveKitSessions ~ response:", response)
    // if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    console.log(data); // or do whatever you like here
    return NextResponse.json({
      response
    })
  } catch (error: any) {
    console.log('There was a problem:', error.message);
    return NextResponse.json({
      error
    })
  }


}




// lib/livekitToken.ts


