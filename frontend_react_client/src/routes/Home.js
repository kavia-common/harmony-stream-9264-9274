import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "./Home.css";
import "../design-system.css";

// PUBLIC_INTERFACE
export default function HomePage({ user, playlists, onNav, onPlaylistSelect }) {
  /**
   * Main homepage based on Figma's home/browse and preview screens.
   */
  return (
    <div className="HomePage">
      <TopBar user={user} onNav={onNav} />
      <div className="Home__row">
        <Sidebar playlists={playlists} onPlaylistSelect={onPlaylistSelect} onNav={onNav} active="home" />
        <main className="Home__main">
          <div className="Home__galleryHeader">
            <h2>Browse all</h2>
          </div>
          <div className="Home__gallery">
            <Card title="Podcasts" color="var(--color-green-spotify)" />
            <Card title="Audiobooks" color="#283ea3" />
            <Card title="Made For You" color="var(--color-gray-dark)" />
            <Card title="Charts" color="#ec7a5e" />
            <Card title="Hip-Hop" color="#be37ac" />
            <Card title="Pop" color="#a3f0ec" />
            <Card title="Rock" color="#2927b5" />
            <Card title="Latin" color="#fcb262" />
            {/* ...add more as in Figma */}
          </div>
        </main>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Card({ title, color }) {
  /** Simple Figma-style browse cards */
  return (
    <div className="Home__card" style={{ background: color }}>
      <div className="Home__card-img" />
      <div className="Home__card-title">{title}</div>
    </div>
  );
}
