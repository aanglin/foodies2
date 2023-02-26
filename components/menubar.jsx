import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="flex justify-start text-gray-500 text-xl pt-4  relative">
      <AiOutlineMenu
        size={25}
        className="relative cursor-pointer"
        onClick={toggleMenu}
      />

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-1/6 h-screen z-50 bg-slate-100`}
      >
        <div className="text-2xl flex-col">
          <Link
            href="/"
            className="block mt-4 sm:inline-block sm:mt-0 hover:text-blue-400 mr-4"
          >
            Home
          </Link>
          <Link
            href="/"
            className="block mt-4 sm:inline-block sm:mt-0 hover:text-blue-400 mr-4"
          >
            About
          </Link>
          <Link
            href="/"
            className="block mt-4 sm:inline-block sm:mt-0 hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </div>

      {showOverlay && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {isOpen && (
        <AiOutlineClose
          size={25}
          className="relative left-60 cursor-pointer z-50"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}

export default Menubar;
