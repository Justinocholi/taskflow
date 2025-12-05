import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import TeamPanel from "./components/TeamPanel";
import Modal from "./components/Modal";
import Notification from "./components/Notification";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setSidebarOpen((v) => !v);

  return (
    <div className="app">
      <Header
        onToggleSidebar={handleToggleSidebar}
        onSearchChange={() => {}}
        onToggleTheme={() => {}}
        onAvatarClick={() => {}}
      />
      <div className="main-layout">
        <Sidebar isOpen={sidebarOpen} />
        <KanbanBoard />
        <TeamPanel />
      </div>
      <Modal />
      <Notification />
    </div>
  );
}

export default App;
