import React from "react";
import "./TopBar.css";
import "../design-system.css";

// PUBLIC_INTERFACE
export default function TopBar({ user, onNav, extra }) {
  /**
   * TopBar for title, back/forward, upgrade, user/pfp.
   */
  return (
    <div className="TopBar" data-testid="TopBar">
      <div className="TopBar__navBtns">
        <button aria-label="Back" className="TopBar__navBtn">◀</button>
        <button aria-label="Forward" className="TopBar__navBtn">▶</button>
      </div>
      <div className="TopBar__center" />
      <button className="TopBar__upgradeBtn">Upgrade</button>
      <div className="TopBar__user" tabIndex={0}>
        <div className="TopBar__userPill">
          <span>{user.name}</span>
        </div>
        <span className="TopBar__statusDot"></span>
        <span className="TopBar__avatarPlaceholder"></span>
      </div>
      {extra}
    </div>
  );
}
