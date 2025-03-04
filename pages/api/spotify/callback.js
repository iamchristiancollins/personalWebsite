// pages/api/spotify/callback.js

export default async function handler(req, res) {
  try {
    // 1) Read the 'code' parameter from the query string
    const code = req.query.code;
    if (!code) {
      return res.status(400).json({ error: "No code provided in the query." });
    }

    // 2) Your Spotify app credentials
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    // const client_id = "e6cb8e13eb4c451ba42c68d12405918a"
    // const client_secret ="9af545282fa7462e8df7eeb6cc022b68"

    // 3) Must match the Redirect URI you added in Spotify's Dashboard
    //    and used in your authorize URL
    const redirect_uri = "http://localhost:3000/api/spotify/callback";

    // 4) Make the POST request to Spotify's /api/token to exchange code for tokens
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret,
      }),
    });

    const data = await response.json();

    // 5) Return that data as JSON so you can see it in your browser
    return res.status(200).json({
      message: "Tokens received from Spotify",
      tokens: data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
