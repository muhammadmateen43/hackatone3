"use client";

import Image from "next/image";
import { FaSearch, FaBell, FaShoppingCart, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import Cart from "./cart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);

  const handleClick = () => {
    setShowCart(!showCart);
    console.log("Cart open status:", showCart);
  };

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
          <button onClick={handleClick} className="relative text-[20px]">
            <FaShoppingCart className="hidden md:block text-gray-500 text-xl mx-2 cursor-pointer hover:text-blue-600" />
            <span className="hidden md:block absolute text-[12px] top-[-8px] right-[-5px] bg-red-500 w-[18px] h-[18px] rounded-full text-center mb-3">
              {totalQuantity}
            </span>
          </button>
          <FaHeart className="hidden md:block text-gray-500 text-xl mx-2 cursor-pointer hover:text-blue-600" />
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

      {/* Sidebar Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transition-transform duration-300 transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Cart />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center z-10">
          <a href="#" className="py-2 text-gray-700 hover:text-blue-600">
            Favorites
          </a>
          <a href="#" className="py-2 text-gray-700 hover:text-blue-600">
            Notifications
          </a>
          <button onClick={handleClick} className="relative text-[20px]">
            <FaShoppingCart className="text-gray-500 text-xl mx-2 cursor-pointer hover:text-blue-600" />
            <span className="hidden md:block absolute text-[12px] top-[-8px] right-[-5px] bg-red-500 w-[18px] h-[18px] rounded-full text-center mb-3">
              {totalQuantity}
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
