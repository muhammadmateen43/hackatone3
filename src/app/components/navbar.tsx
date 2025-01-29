"use client";

import Image from "next/image";
import { FaSearch, FaBell, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 bg-white shadow-md relative">
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Logo */}
        <h1 className="text-blue-600 font-bold text-xl">MORENT</h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 p-2 rounded-full w-1/2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            className="flex-grow outline-none bg-transparent mx-2"
            placeholder="Search"
          />
          <LuArrowLeftRight className="text-gray-500" />
        </div>

        {/* Profile Icons */}
        <div className="flex items-center">
          <div className="relative text-[20px]">
            <FaShoppingCart className="hidden md:block text-gray-500 text-xl mx-2 cursor-pointer hover:text-blue-600" />
            <span className=" hidden md:block absolute text-[12px] top-[-8px] right-[-5px] bg-red-500 w-[18px] h-[18px] rounded-full text-center mb-3 ">
              0
            </span>
          </div>
          <FaBell className="hidden md:block text-gray-500 text-xl mx-2 cursor-pointer hover:text-blue-600" />
          <IoMdSettings className="hidden md:block text-gray-500 text-xl mx-2 cursor-pointer hover:text-blue-600" />
          <Image
            src="/mateen.jpg"
            alt="Profile"
            className="rounded-full cursor-pointer"
            width={40}
            height={40}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center z-10">
          <a href="#" className="py-2 text-gray-700 hover:text-blue-600">
            Favorites
          </a>
          <a href="#" className="py-2 text-gray-700 hover:text-blue-600">
            Notifications
          </a>
          <a href="#" className="py-2 text-gray-700 hover:text-blue-600">
            Settings
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
