"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileNav from "@/components/MobileNav";

const Projects = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <main className=" bg-[#333646] relative">
        {showMenu && <MobileNav toggleMenu={toggleMenu} />}
        <Navbar toggleMenu={toggleMenu} />
      </main>
    </div>
  );
};

export default Projects;
