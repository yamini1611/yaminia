import React from "react";
import Image from "next/image";
import { Socials } from "@/contants";
import Link from "next/link";
import './Styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center ">
        <div className="relative pt-4">
          <Image
            src="/image.png"
            alt="horselogo"
            style={{backgroundColor:"white" }}
            height={60}
            width={60}
            className="w-full h-full object-contain rounded-full "
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold mt-2" id="name">
          Yamini{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 ps-2">
            {" "}
            Dev{" "}
          </span>{" "}
        </h1>
      </div>
      <div className="flex flex-row gap-5 md-2">
        {Socials.map((social) => (
            <Link key={social.name} href={social.Link}><Image
              src={social.src}
              alt={social.name}
              width={social.width}
              height={social.height}
             style={{marginTop:5}}
            ></Image></Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
