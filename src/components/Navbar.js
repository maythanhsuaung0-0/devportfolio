'use client'
import Link from "next/link";
import React,{useState} from "react";
import { usePathname } from "next/navigation";
import { CgMenuLeftAlt } from "react-icons/cg";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const [mobileView, setmobileView] = useState(false);
  const toggleMenu = () => {
    setmobileView(!mobileView);
  };
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
    {mobileView?
    <MobileNav toggleMenu={toggleMenu}/>
    :<div className="bg-[#34364685] fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-[#44465b85]">
      <div className="grid grid-cols-[80%,auto] lg:grid-cols-[60%,40%] w-[85%] lg:w-[70%] m-auto py-5">
        <div className=" font-bold text-white capitalize">
          <Link href="/#top">May Than Hsu</Link>
        </div>
        <div  className="grid">
          <ul className="list-none lg:flex lg:flex-row justify-between hidden gap-10 mr-auto">

{pathname === "/about" ? (
  <li className="activeNav" >
    <Link legacyBehavior href="/about">
      <a className={`navBtn before:opacity-100 text-white`} data-replace="About">
        <span>About</span>
      </a>
    </Link>
  </li>
) : (
  <li>
    <Link legacyBehavior href="/about">
      <a className={`navBtn`} data-replace="About">
        <span>About</span>
      </a>
    </Link>
  </li>
)}
  {pathname === "/resume" ? (
    <li className="activeNav" >
      <Link legacyBehavior href="/resume">
        <a className={`navBtn before:opacity-100 text-white`} data-replace="Resume">
          <span>Resume</span>
        </a>
      </Link>
    </li>
  ) : (
    <li>
      <Link legacyBehavior href="/resume">
        <a className={`navBtn`} data-replace="Resume">
          <span>Resume</span>
        </a>
      </Link>
    </li>
  )}
  {pathname.includes("blogs") ? (
    <li className="activeNav" >
      <Link legacyBehavior href="/blogs">
        <a className={`navBtn before:opacity-100 text-white`} data-replace="Blogs">
          <span>Blogs</span>
        </a>
      </Link>
    </li>
  ) : (
    <li>
      <Link legacyBehavior href="/blogs">
        <a className={`navBtn`} data-replace="Blogs">
          <span>Blogs</span>
        </a>
      </Link>
    </li>
  )}
       </ul>
          <div className="self-center text-2xl text-white lg:hidden justify-self-end" onClick={toggleMenu}>
            <CgMenuLeftAlt/>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>}
    </>
  );
};

export default Navbar;
