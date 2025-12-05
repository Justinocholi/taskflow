import React from "react";

const sampleTasks = [
  { id: 1, title: "Design Landing Page", status: "todo", priority: "high" },
  { id: 2, title: "API Integration", status: "progress", priority: "medium" },
  { id: 3, title: "User Testing", status: "done", priority: "low" }
];

const Column = ({ title, status }) => {
  const tasks = sampleTasks.filter((t) => t.status === status);
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h3 className="column-title">{title}</h3>
        <span className="task-count">{tasks.length}</span>
      </div>
      <div className="tasks" id={`${status}Tasks`}>
        {tasks.map((t) => (
          <div className="task-card" key={t.id}>
            <div className="task-header">
              <h4 className="task-title">{t.title}</h4>
            </div>
            <div className="task-meta">
              <span className={`priority-badge priority-${t.priority}`}>{t.priority}</span>
            </div>
            <div className="task-footer">
              <div className="task-stats">
                <div className="stat-item"><span className="icon">💬</span>0</div>
                <div className="stat-item"><span className="icon">📎</span>0</div>
              </div>
              <div className="assignees"></div>
            </div>
          </div>
        ))}
      </div>
      <button className="add-task-btn"><span className="icon">＋</span> Add Task</button>
    </div>
  );
};

const KanbanBoard = () => {
  return (
    <main className="main-content">
      <div className="content-header">
        <div className="filters">
          <div className="search-box">
            <span className="search-icon icon">🔍</span>
            <input className="search-input" placeholder="Search tasks..." />
          </div>
          <select className="filter-select">
            <option>All Projects</option>
            <option>Website Redesign</option>
            <option>Mobile App</option>
            <option>Marketing Campaign</option>
          </select>
          <select className="filter-select">
            <option>All Status</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <button className="primary-btn">New Task</button>
        </div>
      </div>
      <div className="kanban-board">
        <Column title="To Do" status="todo" />
        <Column title="In Progress" status="progress" />
        <Column title="Done" status="done" />
      </div>
    </main>
  );
};

export default KanbanBoard;
