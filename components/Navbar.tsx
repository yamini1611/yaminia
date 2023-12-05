import React from "react";
import Image from "next/image";
import { Socials } from "@/contants";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center ">
        <div  className="relative">
        <Image
          src="/horseLogo.jpg"
          alt="horselogo"
          height={40}
          width={40}
          className="w-full h-full object-contain rounded-full "
        />
           </div>
      <h1 className="text-white text-[25px] font-semibold">Webchain <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500 ps-2">
           {" "} 
           Dev{" "}
            </span> </h1>
      </div>
      <div className="flex flex-row gap-5 md-2">
{Socials.map((social) =>
(
    <Image key={social.name} src={social.src} alt={social.name} width={28} height={28}></Image>
))}
      </div>
    </div>
  );
};

export default Navbar;
