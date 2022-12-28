import React from "react";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <div className="home-ct">
      <div className="sidebar">
        <button onClick={openSidebar} className="sidebar-btn">
          <FaBars />
        </button>
      </div>
      <div className="modal">
        <button onClick={openModal} className="modal-btn">
          SHOW MODAL
        </button>
      </div>
    </div>
  );
};

export default Home;
