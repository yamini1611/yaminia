"use client"

import Projectcard from "@/components/Projectcard";
import { Projects } from "@/contants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <Projectcard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
