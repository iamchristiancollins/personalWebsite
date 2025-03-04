// components/SpotifyHistory.js

import { useState, useEffect } from "react";

export default function SpotifyHistory() {
  const [recentTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("/api/spotify/recent-tracks");
        const data = await res.json(); // data is the array returned by the API
        setRecentTracks(data); // so recentTracks becomes an array
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      }
    }

    fetchTracks();
  }, []);

  // If we have no tracks, show "No recent tracks"
  if (recentTracks.length === 0) {
    return <p>No recent tracks.</p>;
  }

  // Otherwise, map over the array
  return (
    <div>
      {recentTracks.map((item, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <p>
            <strong>Track:</strong> {item.track?.name}
          </p>
          <p>
            <em>Artist(s):</em>{" "}
            {item.track?.artists?.map((a) => a.name).join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
