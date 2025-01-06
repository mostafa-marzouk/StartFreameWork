import React from "react";

export default function About() {
  return (
    <>
      <div className="h-[80vh] bg-[#1abc9c] flex justify-center items-center flex-col  ">
        <h1 className='text-white after:top-[160%] after:right-[13%] after:w-[30%] after:absolute after:content-[""] after:h-[4px] after:bg-white relative  before:top-[160%] before:left-12  md:text-[39px] text-[30px] font-bold before:content-[""] before:absolute before:w-[30%] before:h-[4px] before:bg-white '>
          ABOUT COMPONENT
        </h1>
        <i className="fa-solid fa-star mt-7 text-white"></i>
        <div className="flex mx-auto justify-center items-center mt-2 gap-1 text-white">
          <p className="w-1/3 ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="w-1/3">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
