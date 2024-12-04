import React from "react";
import { MdNotifications, MdDarkMode, MdTranslate } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar w-[100%] p-2">
      <input
        type="text"
        placeholder="Search"
        className="navbar-search w-full text-xl px-4 py-2 text-white bg-transparent border-none outline-none"
      />

      <div className="navbar-icons ">
        <MdTranslate
          size={24}
          className="text-white cursor-pointer hover:text-blue-500"
        />
        <MdDarkMode
          size={24}
          className="text-white cursor-pointer hover:text-blue-500"
        />
        <MdNotifications
          size={24}
          className="text-white cursor-pointer hover:text-blue-500"
        />
        <div
          className="navbar-profile w-8 h-8 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center cursor-pointer hover:scale-110"
          onClick={() => alert("Profile Clicked")}
        >
          A
        </div>
      </div>
    </div>
  );
}

export default Navbar;
