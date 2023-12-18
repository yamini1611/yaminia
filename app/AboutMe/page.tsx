import React from "react";
import '../../components/Styles/Navbar.css'
const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-12 gap-4" id="name">
        <div className="col-span-5">
          <img
            height={400}
            width={400}
            
            style={{borderRadius:"190px"}}
            src="https://img.freepik.com/free-vector/young-woman-uses-computer-work-reduce-infection_1150-34985.jpg?size=626&ext=jpg&ga=GA1.1.530113245.1702017952&semt=ais"
          />
        </div>
        <div className="col-span-7 text-white">
            Hi there , I'm yamini 
        </div>
      </div>
    </div>
  );
};

export default page;
