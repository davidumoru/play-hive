"use client"; // This is a client component

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
      <div className="navbar flex flex-col align-middle items-center h-24 mx-auto px-40">
        <div className="flex justify-between w-full h-full">
          <Link href="./Home">
            <div className="text-3xl font-bold text-pink-500 mt-8">playHive.</div>
          </Link>
          <ul className="flex items-center">
            <li className=" p-10 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
              <Link href="/home">Home</Link>
            </li>
            <li className=" p-10 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
              <Link href="/about">About</Link>
            </li>
            <li className=" p-10 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
              <Link href="/games">Games</Link>
            </li>
            <li className="relative ml-4">
              <button
                className="flex items-center  p-10 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500"
                onClick={toggleDropdown}
              >
                Account
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {isDropdownVisible && (
                <ul className="absolute top-full right-0 mt-2 py-2 bg-white rounded-md shadow-xl">
                  <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
