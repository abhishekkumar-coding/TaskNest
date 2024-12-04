import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button id=""
        className={`fixed top-4 left-4 z-50 text-white bg-blue-500 p-2 rounded-md md:hidden ${isOpen ? 'close_icon' : 'menu_btn'}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        id="sidebar"
        className={`bg-[#303349] w-[23%] h-[100vh] shadow-lg ${
          isOpen ? "active" : ""
        }`}
      >
        <h1 className="text-[2vw] font-bold text-center text-white pt-5 tracking-wide">
          TaskNest
        </h1>

        <div className="mt-10 space-y-5">
          <Link
            to="/"
            className="link flex items-center gap-4 pl-8 py-3 text-[1.5vw] text-white font-medium cursor-pointer hover:bg-[#3F4057] hover:text-blue-400 rounded transition-colors duration-300"
          >
            <MdSpaceDashboard size={24} /> Dashboard
          </Link>
          <Link
            to="/my-tasks"
            className="link flex items-center gap-4 pl-8 py-3 text-[1.5vw] text-white font-medium cursor-pointer hover:bg-[#3F4057] hover:text-blue-400 rounded transition-colors duration-300"
          >
            <FaTasks size={24} /> My Tasks
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
