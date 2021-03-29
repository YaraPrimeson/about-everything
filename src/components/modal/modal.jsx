import { useState } from "react";
import "./modal.css";

const Modal = ({ active, setActive, children, handleClose }) => {
  const handleClick = (currentTarget, target) => {
    if (target === currentTarget) {
      handleClose();
    }
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export { Modal };
