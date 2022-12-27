import React from "react";
import { useModalContext } from "../context";

const Home = () => {
  const { open } = useModalContext();

  return (
    <div className="home-ct">
      <button onClick={open} className="show-btn">
        SHOW MODAL
      </button>
    </div>
  );
};

export default Home;
