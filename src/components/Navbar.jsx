import React, { useState } from "react";
import { MdNotifications, MdDarkMode, MdTranslate } from "react-icons/md";

function Navbar() {
  return (
    <div
      className={`w-[74%] bg-[#3F4057] mt-4 absolute top-0 right-4 flex items-center rounded-md transition duration-300`}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full text-xl px-4 py-4 shadow-sm focus:outline-none transition duration-200 text-white rounded-l-md bg-inherit"
      />
{/* RIGHT SIDE ICONS AND PROFILE ICON */}
      <div className="flex items-center space-x-4 pr-4">
        <MdTranslate
          size={24}
          className="text-white cursor-pointer hover:text-blue-500 transition duration-200"
        />

        <MdDarkMode
          size={24}
          className="text-white cursor-pointer hover:text-blue-500 transition duration-200"

        />

        <MdNotifications
          size={24}
          className="text-white cursor-pointer hover:text-blue-500 transition duration-200"

        />

        <div
          className="w-8 h-8 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-200"
          onClick={() => alert("Profile Clicked")}
        >
          A
        </div>
      </div>
    </div>
  );
}

export default Navbar;
