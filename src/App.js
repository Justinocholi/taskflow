import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import TeamPanel from "./components/TeamPanel";
import Modal from "./components/Modal";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <KanbanBoard />
        <TeamPanel />
      </div>
      <Modal />
      <Notification />
    </div>
  );
}

export default App;
