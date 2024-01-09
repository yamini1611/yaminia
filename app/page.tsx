"use client"
import Image from "next/image";
import Link from "next/link";
import useDownloader from "react-use-downloader";
import { useEffect, useState } from "react";

export default function Home() {
  const { download } = useDownloader();
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("sm");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("md");
      } else if(width >=1024 && width < 1200){
        setScreenSize("xl");
      }
      else{
        setScreenSize("xxl");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideImage = (size: string) => {
    if (size === "sm" || size === "md" || size === "xl") {
      return { display: "none" };
    }
    else if(size === "xxl"){
      return { };
    }
    return {};
  };

  const fileUrl = "/Resume/YaminiPriya.pdf";
  const filename = "YaminiResume.pdf";

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-6 md:pl-20 lg:pl-40 pb-6 md:pb-20 flex flex-col text-center gap-4 z-10 max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight" id="name">
            Building your dreams
            <p className="text-transparent text-6xl md:text-7xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ps-2 pt-4">
              fueled by code and passion.
            </p>
          </h1>

          <h1 className="text-lg md:text-2xl text-gray-100 hidden md:block px-3">
            Full-stack wizard, here to make your vision happen.
          </h1>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <Link href="/my-skills" className="rounded-lg group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white w-max">
              Learn More
            </Link>
         
            <Link href="/my-projects" className="rounded-lg group relative bg-transparent border border-white px-5 py-3 text-lg text-white w-max">
              My Projects
            </Link>
            <Link href="/contact-me" className="rounded-lg group relative bg-transparent border border-white px-5 py-3 text-lg text-white w-max">
              Contact me
            </Link>
            <button onClick={() => download(fileUrl, filename)} className="rounded-lg group relative bg-transparent border border-white px-5 py-3 text-lg text-white w-max">
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-10" style={hideImage(screenSize)}>
        <Image src="/horse.gif" alt="horseImage" height={300} width={300} className="absolute right-10 md:right-20 lg:right-40 top-36" />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 w-full h-full">
        <Image src="/trees.webp" alt="Trees" width={2000} height={2000} />
      </div>
      <Image src="/stars.png" alt="startsImage" height={300} width={300} className="absolute left-0 z-10 top-0" />
    </main>
  );
}
