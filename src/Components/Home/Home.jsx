import React from "react";
import Persone from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="h-[80vh] bg-[#1abc9c] flex justify-center items-center flex-col  ">
        <div className=" w-[20%]">
          <img src={Persone} alt="" className="w-[100%]" />
        </div>
        <h1 className='text-white after:top-[160%] after:right-[13%] after:w-[30%] after:absolute after:content-[""] after:h-[4px] after:bg-white relative  before:top-[160%] before:left-12  text-[39px] font-bold before:content-[""] before:absolute before:w-[30%] before:h-[4px] before:bg-white '>
          START FRAMEWORK
        </h1>
        <i className="fa-solid fa-star mt-7 text-white"></i>
        <p className="mt-3 text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
