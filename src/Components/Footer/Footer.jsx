import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap p-12 gap-y-10 bg-[#2c3e50] py-20">
        <div className="md:w-1/3 w-full mx-auto text-white text-center">
          <h1 className="text-[28px] font-medium mb-3">LOCATION</h1>
          <p className="mb-3">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="md:w-1/3 w-full mx-auto text-white text-center">
          <h1 className="text-[28px] font-medium mb-3">AROUND THE WEB</h1>
          <div className="space-x-2">
            <i className="fa-brands fa-facebook text-[15px] border-white border-[1px] rounded-full p-3 "></i>
            <i className="fa-brands fa-twitter text-[15px] border-white border-[1px] rounded-full p-3 "></i>
            <i className="fa-brands fa-linkedin text-[15px] border-white border-[1px] rounded-full p-3 "></i>
            <i className="fa-solid fa-globe text-[15px] border-white border-[1px] rounded-full p-3 "></i>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto text-white text-center">
          <h1 className="text-[28px] font-medium mb-3">ABOUT FREELANCER</h1>
          <p className="mb-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
          </div>
          <div className="p-5 text-center bg-[#1a252f]  text-white">
              <p>Copyright © Your Website 2021</p>
          </div>
    </>
  );
}
