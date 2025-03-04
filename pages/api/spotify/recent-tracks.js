// pages/api/spotify/recent-tracks.js

import { getAccessToken } from "../../../lib/spotify";

export default async function handler(req, res) {
  try {
    // 1) Get a fresh access token using your refresh token
    const accessToken = await getAccessToken();

    // 2) Call Spotify's Recently Played endpoint
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=9",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();

    // data.items is the array of track objects
    // Return just the items to the client
    return res.status(200).json(data.items);
  } catch (error) {
    console.error("Error fetching recent tracks:", error);
    return res.status(500).json({ error: "Failed to fetch recent tracks" });
  }
}
