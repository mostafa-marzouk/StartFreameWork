import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import tap from "../../assets/download.svg";

export default function Navbar() {
  const [x, setx] = useState(false);

  function oneTap() {
    if (x == true) {
      setx(false);
    } else {
      setx(true);
    }
    console.log(x);
  }

  return (
    <>
      <div className="bg-[#2c3e50]">
        <div className="navBar flex-wrap items-center flex justify-between p-10">
          <div className="logo w-[40%] text-white md:text-4xl text-[20px] font-bold ">
            <Link to="StartFreameWork">
              <h1>START FRAMEWORK</h1>
            </Link>
          </div>

          <ul className="text-white lg:flex  me-20 gap-8 font-bold  hidden">
            <li>
              <NavLink to="about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">PORITFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="contact">CONTACT</NavLink>
            </li>
          </ul>

          <img
            onClick={() => {
              oneTap();
            }}
            src={tap}
            className="md:w-[6%] w-[15%] lg:hidden block border-2 rounded-lg cursor-pointer border-slate-800"
            alt="tap"
          />
        </div>
        <ul
          className={
            x == true
              ? "text-white flex lg:hidden flex-col ms-20 py-7 me-20 gap-8 font-bold  "
              : "hidden"
          }
        >
          <li>
            <NavLink to="about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">PORITFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
