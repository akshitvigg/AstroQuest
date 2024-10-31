import React from "react";

const Modal = ({ show, onclose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onclose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
