import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#111418] h-12 text-white flex items-center justify-between px-4 border-b-2 border-gray-700">
      <h1 className="text-xl font-bold tracking-tight">Melihcan Yıldız</h1>
      <ul className="flex items-center gap-4 text-gray-400 hidden md:flex">
        <li className="text-gray-300 hover:text-white transition-colors">
          About
        </li>
        <li className="text-gray-300 hover:text-white transition-colors">
          Projects
        </li>
        <li className="text-gray-300 hover:text-white transition-colors">
          Contact
        </li>
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#283039] text-white">
          <FiGithub />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#283039] text-white">
          <CiLinkedin />
        </div>
      </ul>
      <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
            {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          
        </svg>
      </button>
       {/* Açılır Menü (mobil) */}
       {isOpen && (
        <ul className="top-full left-0 w-full bg-gray-800 flex flex-col gap-4 p-4 md:hidden">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}
