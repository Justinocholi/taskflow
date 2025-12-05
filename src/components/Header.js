import React from "react";

const Header = ({ onToggleSidebar, onSearchChange, onToggleTheme, onAvatarClick }) => {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button className="icon-btn mobile-menu-btn" onClick={onToggleSidebar} aria-label="Toggle menu">
          <span className="icon">☰</span>
        </button>
        <div className="logo">
          <span>📋</span> TaskFlow
        </div>
      </div>

      <nav className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Projects</a>
        <a href="#">Teams</a>
        <a href="#">Calendar</a>
        <a href="#">Settings</a>
      </nav>

      <div className="header-actions">
        <div className="search-box" style={{ maxWidth: 200 }}>
          <span className="search-icon icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search tasks..."
            onChange={onSearchChange}
            style={{ paddingLeft: "2rem" }}
          />
        </div>

        <button className="icon-btn notification-btn" aria-label="Notifications">
          <span className="icon">🔔</span>
          <div className="notification-badge"></div>
        </button>

        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          <span className="icon theme-icon">🌙</span>
        </button>

        <div className="user-menu">
          <div className="user-avatar" onClick={onAvatarClick}>JD</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
