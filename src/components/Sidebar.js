import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar" id="sidebar">
            <div className="sidebar-item active">
                <span className="icon">📂</span>
                <span>All Projects</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">⭐</span>
                <span>Favorites</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">📅</span>
                <span>Calendar</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">👥</span>
                <span>Team</span>
            </div>
            <div className="sidebar-item">
                <span className="icon">⚙️</span>
                <span>Settings</span>
            </div>
        </aside>
  );
};

export default Sidebar;
