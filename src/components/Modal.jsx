import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isShowModal, closeModal } = useGlobalContext();

  if (!isShowModal) return;

  return (
    <div className="overlay">
      <div className="modal-ct">
        <div className="modal-head">
          <button onClick={closeModal} className="close-btn">
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
