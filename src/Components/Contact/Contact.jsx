import React from 'react'

export default function Contact() {
  return <>
    <div className="h-[80vh] flex justify-center flex-col items-center">
    <div className=" text-center w-1/2 mx-auto">
          <h1 className='text-[#2c3e50] after:top-[100%] after:right-[30%] after:w-[15%] after:absolute after:content-[""] after:h-[4px] after:bg-[#2c3e50] relative  before:top-[100%] before:left-[30%]  md:text-[39px] text-[15px] font-bold before:content-[""] before:absolute before:w-[15%] before:h-[4px] before:bg-[#2c3e50] '>
          CONTACT SECTION
          </h1>
          <i className="fa-solid fa-star  text-[#2c3e50]"></i>
        </div>
    <div className="flex flex-col bg-white gap-y-4 mt-10 justify-center items-center w-[50%]">
      <input type="text" placeholder='userName' className='w-[100%] h-12 px-3 placeholder:text-slate-600 outline-none border-b-2' />
      <input type="text" placeholder='userAge' className='w-[100%] h-12 px-3 placeholder:text-slate-600 outline-none border-b-2' />
      <input type="text" placeholder='userEmail' className='w-[100%] h-12 px-3 placeholder:text-slate-600 outline-none border-b-2' />
        <input type="text" placeholder='userPassword' className='w-[100%] h-12 px-3 placeholder:text-slate-600 outline-none border-b-2' />
        <button className='bg-teal-500 text-white px-4 py-2 rounded-md self-start mt-2'>send Message</button>
    </div>
  </div>

</>
}
