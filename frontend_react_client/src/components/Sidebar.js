import React from "react";
import "./Sidebar.css";
import "../design-system.css";

// PUBLIC_INTERFACE
export default function Sidebar({ active, onNav, playlists, onPlaylistSelect, children }) {
  /** 
   * Sidebar navigation for main app.
   */
  return (
    <aside className="Sidebar" data-testid="Sidebar">
      <div className="Sidebar__brand">
        <div className="Sidebar__logo"></div>
        <span className="Sidebar__brandname">Spotify</span>
      </div>
      <nav className="Sidebar__nav">
        <ul>
          <li className={active === "home" ? "active" : ""} onClick={() => onNav("home")}>Home</li>
          <li className={active === "search" ? "active" : ""} onClick={() => onNav("search")}>Search</li>
          <li className={active === "library" ? "active" : ""} onClick={() => onNav("library")}>Your Library</li>
        </ul>
      </nav>
      <div className="Sidebar__divider"></div>
      <button className="Sidebar__createPlaylist" onClick={() => onNav("create_playlist")}>
        + Create Playlist
      </button>
      <div className="Sidebar__links">
        <div className="Sidebar__playlistLinks">
          <div className="Sidebar__playlistLink" onClick={() => onPlaylistSelect("Liked Songs")}>Liked Songs</div>
          <div className="Sidebar__playlistLink" onClick={() => onPlaylistSelect("Your Episodes")}>Your Episodes</div>
        </div>
        <div className="Sidebar__userPlaylists">
          {playlists && playlists.map(pl =>
            <div
              className="Sidebar__playlistLink"
              key={pl}
              onClick={() => onPlaylistSelect(pl)}
              style={{ color: "#b3b3b3" }}
            >{pl}</div>
          )}
        </div>
      </div>
      <div className="Sidebar__install">
        <div className="Sidebar__installIcon"></div>
        <span>Install App</span>
      </div>
      {children}
    </aside>
  );
}
