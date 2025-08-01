import React, { useState } from "react";
import HomePage from "./routes/Home";
import "./App.css";
import "./design-system.css";

// PUBLIC_INTERFACE
function App() {
  // Demo/user state for now
  const [user] = useState({ name: "Rajarshi B" });
  const [playlists] = useState([
    "Bollywood Jazz", "Hangover Cure", "Your Top Songs 2022", "Desi Indie", "Rock in India", "RADAR India"
  ]);
  const [route, setRoute] = useState("home");
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  // IE: router switch
  let page = <HomePage user={user} playlists={playlists} onNav={setRoute} onPlaylistSelect={setSelectedPlaylist} />;
  // TODO: Add: auth, search, playback, playlist, profile routes

  return (
    <div className="App" data-theme="light">
      {page}
    </div>
  );
}

export default App;
