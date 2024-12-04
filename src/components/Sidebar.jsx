import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

function Sidebar() {
  return (
    <div id="sidebar" className="bg-[#303349] w-[23%] h-[100vh] shadow-lg">
      <h1 className="text-[2vw] font-bold text-center text-white pt-5 tracking-wide">
        TaskNest
      </h1>

      <div className="mt-10 space-y-5">
        <Link
          to="/"
          className="flex items-center gap-4 pl-8 py-3 text-[1.5vw] text-white font-medium cursor-pointer hover:bg-[#3F4057] hover:text-blue-400 rounded transition-colors duration-300"
        >
          <MdSpaceDashboard size={24} /> Dashboard
        </Link>
        <Link
          to="/my-tasks"
          className="flex items-center gap-4 pl-8 py-3 text-[1.5vw] text-white font-medium cursor-pointer hover:bg-[#3F4057] hover:text-blue-400 rounded transition-colors duration-300"
        >
          <FaTasks size={24} /> My Tasks
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
