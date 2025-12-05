import React from "react";

const TeamPanel = () => {
  return (
    <aside className="team-panel">
      <div className="panel-header">
        <h3>Team Members</h3>
      </div>
      <div className="team-member">
        <div className="member-avatar">
          A<div className="online-indicator" />
        </div>
        <div className="member-info">
          <div className="member-name">Alice Johnson</div>
          <div className="member-status">Online</div>
        </div>
      </div>
      <div className="team-member">
        <div className="member-avatar">B</div>
        <div className="member-info">
          <div className="member-name">Bob Smith</div>
          <div className="member-status">Away</div>
        </div>
      </div>
    </aside>
  );
};

export default TeamPanel;
