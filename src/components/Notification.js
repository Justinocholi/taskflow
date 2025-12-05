import React from "react";

const Notification = () => {
  return (
    <div aria-live="polite" aria-atomic="true" style={{ position: "fixed", bottom: 16, right: 16 }}></div>
  );
};

export default Notification;
