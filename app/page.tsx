"use client"
import Image from "next/image";
import Link from "next/link";
import "../components/Styles/Navbar.css";
import useDownloader from "react-use-downloader";

export default function Home() {
  const { download} = useDownloader();

  const fileUrl = "/Resume/YaminiPriya.pdf";
  const filename = "YaminiResume.pdf";
  return (
    <main className="w-screen h-screen  relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col text-center gap-4 z-[10] max-w-[1150px]">
          <h1 className="text-[45px] text-white font-semibold " id="name">
            Building your dreams
            <p className="text-transparent text-[55px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ps-2">
              fueled by code and passion.
            </p>
          </h1>

          <h1
            className=" text-[25px] text-gray-100 hidden md:block px-3"
            id="name"
          >
            Full-stack wizard, here to make your vision happen.
          </h1>
          <div className="flex-col text-center  md:flex-row hidden md:flex gap-5 ">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover-bg-blue-400 px-5 py-3 text-lg text-white-max-[w-200px] "
            >
              Learn More
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
            <button
              onClick={() => download(fileUrl, filename)}
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <div className=" absolute right-0 bottom-0 z-[10]">
        <Image
          src="/horse.gif"
          alt="horseImage"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 w-full h-full  ">
        <Image src="/trees.webp" alt="Trees" width={2000} height={2000} />
      </div>
      <Image
        src="/stars.png"
        alt="startsImage"
        height={300}
        width={300}
        className="absolute left-0 z-[10] top-0"
      />
    </main>
  );
}
