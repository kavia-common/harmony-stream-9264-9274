import React from "react";
import "./Home.css";
import "../design-system.css";

// PUBLIC_INTERFACE
/**
 * HomePage component - the main landing page for unauthenticated users,
 * styled and structured to match the Spotify 1 (screen_0:3) Figma screen.
 *
 * Uses only tokens, layout, and structure defined by assets/design-system.css and the HTML reference.
 */
export default function HomePage({ user, playlists, onNav, onPlaylistSelect }) {
  // This Home page does not show the search or grid as in the old version – it's a landing experience
  return (
    <div className="HomeFigma1">
      {/* Top Navigation Bar - dark and floating */}
      <nav className="HomeFigma1__nav">
        <div className="HomeFigma1__navBtnGroup">
          <button className="navBtn" aria-label="Back">◀</button>
          <button className="navBtn" aria-label="Forward">▶</button>
        </div>
        <div className="HomeFigma1__auth">
          <button className="navAuth navSignup" tabIndex={0}>Sign up</button>
          <button className="navAuth navLogin" tabIndex={0}>Log in</button>
        </div>
      </nav>

      {/* Preview bar */}
      <section className="HomeFigma1__previewBar">
        <div>
          <div className="HomeFigma1__previewBarTop">Preview of Spotify</div>
          <div className="HomeFigma1__previewBarText">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
        </div>
        <button className="HomeFigma1__previewSignup">Sign up free</button>
      </section>

      {/* Main layout row */}
      <main className="HomeFigma1__content">
        <aside className="HomeFigma1__sidebar">
          <div className="HomeFigma1__sidebarBrand">Spotify</div>
          <nav className="HomeFigma1__sidebarNav">
            <span className="active">Home</span>
            <span>Search</span>
            <span>Your Library</span>
          </nav>
          <div className="HomeFigma1__sidebarLinks">
            {/* Add links such as "Legal", "Privacy", etc, if needed */}
          </div>
        </aside>

        {/* Main: Browse All grid */}
        <section className="HomeFigma1__main">
          <header className="HomeFigma1__galleryHeader">
            <h2>Browse all</h2>
          </header>
          <div className="HomeFigma1__gallery">
            <BrowseCard label="Podcasts" bg="var(--color-green-spotify)" />
            <BrowseCard label="Audiobooks" bg="var(--color-bar-bg)" />
            <BrowseCard label="Made For You" bg="var(--color-gray-dark)" />
            <BrowseCard label="Charts" bg="#ec7a5e" />
            <BrowseCard label="Hip-Hop" bg="#be37ac" />
            <BrowseCard label="Pop" bg="#a3f0ec" />
            <BrowseCard label="Rock" bg="#2927b5" />
            <BrowseCard label="Latin" bg="#fcb262" />
            {/* ... More as per Figma */}
          </div>
        </section>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
/**
 * BrowseCard - card as used in the "Browse all" grid in the Figma screen.
 * @param {string} label - Card title
 * @param {string} bg - CSS background color (token-driven)
 */
function BrowseCard({ label, bg }) {
  return (
    <div
      className="HomeFigma1__browseCard"
      style={{ background: bg }}
    >
      <div className="HomeFigma1__browseCardArt"></div>
      <div className="HomeFigma1__browseCardLabel">{label}</div>
    </div>
  );
}
