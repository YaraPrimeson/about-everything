import { useState } from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close">x</button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
