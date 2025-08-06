import { AccessToken } from 'livekit-server-sdk'



export async function generateAnalyticsToken(apiKey: string, apiSecret: string) {
  const at = new AccessToken(apiKey, apiSecret, {
    ttl: 60 * 60 * 24, // valid for 24 hours
  });
  at.addGrant({ roomList: true });
  return  at.toJwt();
}