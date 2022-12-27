import React from "react";
import { useModalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isShow, close } = useModalContext();

  if (!isShow) return;

  return (
    <div className="modal-overlay">
      <div className="modal-ct">
        <div className="modal-head">
          <button onClick={close}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <h1>Modal Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
