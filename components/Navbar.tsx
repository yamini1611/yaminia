"use client"
import Image from "next/image";
import { Socials } from "@/contants";
import Link from "next/link";
import { useState } from "react";
import './Styles/Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fixed top-0 z-[40] w-full bg-transparent flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
      <div className="flex items-center">
        <div className="relative pt-1">
          <Image
            src="/image.png"
            alt="logo"
            style={{ backgroundColor: "white" }}
            height={60}
            width={60}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[20px] md:text-[25px] font-semibold ml-2 md:ml-4" id="name">
          Yamini{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ps-2">
            Dev
          </span>
        </h1>
      </div>
      <button onClick={toggleNav} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className={`md:flex items-center space-x-4 ${isNavOpen ? '' : 'hidden'}`}>
        {Socials.map((social) => (
          <Link key={social.name} href={social.Link} data-toggle="tooltip" data-placement="bottom" title={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={social.width}
              height={social.height}
              style={{ marginTop: 5 }}
              
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
