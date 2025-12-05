import React from "react";

const Modal = () => {
  return (
    <div className="modal-overlay" id="taskModal" style={{ display: "none" }}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Task Details</h2>
          <button className="close-btn">&times;</button>
        </div>
        <div className="modal-body"></div>
      </div>
    </div>
  );
};

export default Modal;
