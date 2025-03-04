// lib/spotify.js

export async function getAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID; // from .env.local
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // from .env.local
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN; // from .env.local

  // Exchange the refresh token for a fresh access token
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // Passing ID/secret via Basic Auth
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  });

  const data = await response.json();

  // data.access_token is valid for ~1 hour
  return data.access_token;
}
