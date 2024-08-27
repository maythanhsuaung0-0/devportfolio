import Link from "next/link";
import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = ({toggleMenu}) => {

  return (
    <div className="bg-[#3336464f] fixed left-0 w-full z-50 backdrop-blur-md">
      <div className="grid grid-cols-[80%,auto] lg:grid-cols-[60%,40%] w-[85%] lg:w-[70%] m-auto py-8">
        <div className=" font-bold text-white uppercase">
          <Link href="/">Maycodes</Link>
        </div>
        <div  className="grid">
          <ul className="list-none lg:flex lg:flex-row justify-between hidden">
            <li>
              <Link className="navBtn" href="/resume">Resume</Link>
            </li>
            <li>
              <Link className="navBtn" href="/projects">Projects</Link>
            </li>
            <li>
              <Link  className="navBtn" href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="self-center text-2xl text-white lg:hidden justify-self-end" onClick={toggleMenu}>
            <CgMenuLeftAlt/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
