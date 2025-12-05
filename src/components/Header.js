import React from "react";

const Header = () => {
  return (
    <header className="header">
        <div style="display: flex; align-items: center; gap: 1rem;">
            <button className="icon-btn mobile-menu-btn" onclick="toggleSidebar()">
                <span className="icon">☰</span>
            </button>
            <div className="logo">
                <span>📋</span> TaskFlow
            </div>
        </div>

        <nav className="nav-links">
            <a href="#" onclick="setView('kanban')">Dashboard</a>
            <a href="#">Projects</a>
            <a href="#">Teams</a>
            <a href="#" onclick="setView('calendar')">Calendar</a>
            <a href="#">Settings</a>
        </nav>

        <div className="header-actions">
            <div className="search-box" style="max-width: 200px;">
                <span className="search-icon icon">🔍</span>
                <input type="text" className="search-input" placeholder="Search tasks..." 
                       onkeyup="handleSearch(event)" style="padding-left: 2rem;">
            </div>
            
            <button className="icon-btn notification-btn">
                <span className="icon">🔔</span>
                <div className="notification-badge"></div>
            </button>
            
            <button className="icon-btn" onclick="toggleTheme()">
                <span className="icon theme-icon">🌙</span>
            </button>
            
            <div className="user-menu">
                <div className="user-avatar" onclick="toggleUserMenu()">JD</div>
            </div>
        </div>
    </header>
  );
};

export default Header;
