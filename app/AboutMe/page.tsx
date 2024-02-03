import React from "react";
import '../../components/Styles/Navbar.css';
import Link from "next/link";

const Page = () => {
  return (
    <div className="container-fluid mx-auto flex flex-wrap items-center justify-center h-screen bg-cover" style={{ backgroundImage: 'url(/Mountains.jpg)' }}>
      <div className="md:w-1/4 p-5  ">
        <img
          height={400}
          width={400}
          style={{ borderRadius: "190px" }}
          src="https://img.freepik.com/free-vector/young-woman-uses-computer-work-reduce-infection_1150-34985.jpg?size=626&ext=jpg&ga=GA1.1.530113245.1702017952&semt=ais"
          alt="Illustration of a person using a computer"
        />
      </div>
      <div className="md:w-1/2 p-5">
      <div className="cloud-container p-6 bg-white rounded-lg">
        <div className="content-container">
          <h1 className="title text-2xl md:text-4xl">
            ✨ Meet Yamini, your coding companion! 🚀
          </h1>
          <p className="description text-lg md:text-xl">
            I'm a techno-wizard dancing between React JS, Next JS, .Net Core, and SQL Server. With creativity and unicorn dust, I turn code into magic. From crafting elegant UIs to robust backends, I make tech sing!
          </p>
          <p className="call-to-action text-xl md:text-2xl">
            🌟 Let's create digital spells together! Ready to infuse magic into your tech world? I'm just a spell away.  🚀✨ <Link href="/contact-me"><button className="bg-red-500 text-white py-2 px-4 rounded" >Contact me </button></Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
