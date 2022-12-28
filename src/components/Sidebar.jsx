import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../data";

const Sidebar = () => {
  const { isShowSidebar, closeSidebar } = useGlobalContext();

  return (
    <div className={isShowSidebar ? "overlay" : null}>
      <div
        className={
          isShowSidebar ? "sidebar-ct show-sidebar" : "sidebar-ct hide-sidebar"
        }
      >
        <div>
          <div className="sidebar-head">
            <h1 className="sidebar-logo">
              Side<span>bar</span>
            </h1>
            <button className="close-btn" onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>
          <div className="sidebar-body">
            <ul className="link">
              {links.map((e, i) => {
                const { text, icon } = e;
                return (
                  <li key={i}>
                    <a href="#">
                      {icon}
                      <span>{text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <ul className="social">
            {social.map((e, i) => {
              const { url, icon } = e;
              return (
                <li key={i}>
                  <a href={url} target={"_blank"} rel={"noreferrer"}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
