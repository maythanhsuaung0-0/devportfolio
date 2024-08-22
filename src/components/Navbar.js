import Link from "next/link";
import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = ({toggleMenu}) => {

  return (
    <div className="bg-[#333646]">
      <div className="grid grid-cols-[80%,auto] lg:grid-cols-[60%,40%] w-[85%] lg:w-[70%] m-auto py-10">
        <div className="fw-bold uppercase">Maycodes</div>
        <div  className="grid">
          <ul className="list-none lg:flex lg:flex-row justify-between hidden">
            <li className="">
              <Link className="navBtn" href="/">Home</Link>
            </li>
            <li>
              <Link className="navBtn" href="/about">About</Link>
            </li>
            <li>
              <Link className="navBtn" href="/projects">Projects</Link>
            </li>
            <li>
              <Link  className="navBtn" href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="self-center text-2xl lg:hidden justify-self-end" onClick={toggleMenu}>
            <CgMenuLeftAlt/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
