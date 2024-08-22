"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import BlogToggle from "@/components/BlogToggle";
import { IoCloseOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "@/components/Slider";

export default function Home() {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <main className=" bg-[#333646] relative">
        {showMenu && (
          <div className="fixed py-10  w-full h-full top-0 left-0 bg-[rgba(36,36,36,0.85)] backdrop-blur-sm z-50">
            <div className="w-[85%] m-auto grid gap-2">
              <div
                className=" justify-self-end text-3xl cursor-pointer"
                onClick={toggleMenu}
              >
                <IoCloseOutline />
              </div>
              <ul className="list-none text-2xl grid gap-6">
                <li className="">
                  <Link className="navBtn" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navBtn" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="navBtn" href="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="navBtn" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Navbar toggleMenu={toggleMenu} />
        <section className="grid gap-[5em] lg:gap-0 lg:grid-cols-[60%,40%] w-[80%] lg:w-[70%] m-auto py-[5em]">
          <div className="flex flex-col gap-[3em] lg:gap-[7em] justify-between">
            <h1
              className=" font-extrabold text-7xl relative before:content[''] before:w-[2em] before:h-[1.5em]
           before:bg-yellow-400 before:absolute before:-top-10 before:opacity-20 before:blur-[1px] before:right-54 lg:before:right-32"
            >
              May Than <br />
              <span className="border-b-4 border-solid border-yellow-500 py-2">
                H
              </span>
              <span className="py-2">su</span>
            </h1>
            <div>
              <ul className="flex flex-row gap-4">
                <li>
                  <div className="text-2xl cursor-pointer">
                    <IoLogoInstagram />
                  </div>
                </li>
                <li>
                  <div className="text-2xl cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-[2em]">
            <div className="flex flex-row gap-1">
              <span className=" self-center text-gray-400">
                <GoDash />
              </span>
              <span className="subtext tracking-wider">Introduction</span>
            </div>
            <h4 className="text-3xl font-semibold">
              Fullstack and frontend developer
            </h4>
            <p className=" subtext">
              I am a fast-paced self-learner whose passion is Coding! I love
              delivering visually appealing websites to end-users.
            </p>
            <a className=" text-yellow-500 cursor-pointer font-semibold">
              More about me
            </a>
          </div>
        </section>
      </main>
      {/* about */}
      <section className=" bg-[#262734] pt-[5em] pb-[5em] lg:pb-[12em]">
        <div className="flex flex-col lg:flex-row gap-[4em] lg:gap-[3em] w-[80%] lg:w-[70%] m-auto">
          <div>
            <div className="lg:h-[10em] flex flex-col gap-[2em]">
              <div className="flex flex-row gap-1">
                <span className=" self-center text-gray-400">
                  <GoDash />
                </span>
                <span className="subtext tracking-wider">Introduction</span>
              </div>
              <h4 className="text-3xl font-bold">
                Fullstack and frontend developer
              </h4>
              <p className=" subtext">
                I am a fast-paced self-learner whose passion is Coding! I love
                delivering visually appealing websites to end-users.
              </p>
              <a className=" text-yellow-500 cursor-pointer font-bold">
                More about me
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-[2em]">
              <h4 className="text-3xl font-bold">About me</h4>{" "}
              <p className=" subtext w-full">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio
                vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae
                nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.
                Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec
                odio vitae
              </p>
              <div className="flex flex-row gap-10">
                <div className="flex flex-row gap-3">
                  <span className="text-5xl text-yellow-500">3</span>
                  <span className="self-center">years of experience</span>
                </div>
                <div className="flex flex-row gap-3">
                  <span className="text-5xl text-yellow-500">3</span>
                  <span className="self-center">projects completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skills */}
      <section className="bg-[#333646] py-[5em]">
        <div className="w-[80%] lg:w-[70%] mx-auto relative">
          <div className="lg:absolute lg:-top-44 lg:left-[50%] lg:transform lg:-translate-x-[50%]">
            {/* <div className="flex flex-col lg:flex-row gap-10"> */}
            <div className=" m-auto w-full lg:w-[800px]">
              {" "}
              <SimpleSlider/>
              {/* <div className="p-5 w-52 h-52 self-center hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
                <div className="flex flex-row gap-1 mt-auto">
                  <div className="text-lg mt-1">
                    <AiOutlineAntDesign />
                  </div>
                  <div className="grid gap-1">
                    <span className="text-lg">UI/UX designer</span>
                    <span className="text-xs">100 projects</span>
                  </div>
                </div>
              </div>
              <div className="p-5 w-52 h-52 self-center hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
                <div className="flex flex-row gap-1 mt-auto">
                  <div className="text-lg mt-1">
                    <AiOutlineAntDesign />
                  </div>
                  <div className="grid gap-1">
                    <span className="text-lg">UI/UX designer</span>
                    <span className="text-xs">100 projects</span>
                  </div>
                </div>
              </div>
              <div className="p-5 w-52 h-52 self-center hover:bg-yellow-500 cursor-pointer bg-[#434657] flex">
                <div className="flex flex-row gap-1 mt-auto">
                  <div className="text-lg mt-1">
                    <AiOutlineAntDesign />
                  </div>
                  <div className="grid gap-1">
                    <span className="text-lg">UI/UX designer</span>
                    <span className="text-xs">100 projects</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="lg:pt-[7em] py-[5em] lg:py-[7em] grid gap-[3em]">
            <h4 className="text-3xl font-bold text-center">My Expertise </h4>
            <div className="flex flex-row flex-wrap text-white justify-between">
              <span className="text-6xl mb-5">
                <IoLogoFigma />
              </span>
              <span className="text-6xl mb-5">
                <FaReact />
              </span>
              <span className="text-6xl mb-5">
                <IoLogoJavascript />
              </span>
              <span className="text-6xl mb-5">
                <FaPython />
              </span>
              <span className="text-6xl mb-5">
                <TbBrandCSharp />
              </span>
              <span className="text-6xl mb-5">
                <IoLogoCss3 />
              </span>
              <span className="text-6xl mb-5">
                <BiLogoTailwindCss />
              </span>
              <span className="text-7xl">
                <SiMysql />
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-[2em] lg:gap-[6em]">
            <div className="grid gap-[3em] lg:gap-3">
              <div className="lg:h-[10em] flex flex-col gap-[2em]">
                <div className="flex flex-row gap-1">
                  <span className=" self-center text-gray-400">
                    <GoDash />
                  </span>
                  <span className="subtext tracking-wider">Introduction</span>
                </div>
                <h4 className="text-3xl font-bold">
                  Fullstack and frontend developer
                </h4>
                <p className=" subtext">
                  I am a fast-paced self-learner whose passion is Coding! I love
                  delivering visually appealing websites to end-users.
                </p>
                <a className=" text-yellow-500 cursor-pointer font-bold">
                  More about me
                </a>
              </div>
              <div>
                <Image
                  src="https://i.pinimg.com/564x/ca/59/42/ca5942f341bdd354f6b2f5e7e3e64301.jpg"
                  alt="image"
                  width={400}
                  height={500}
                />
              </div>
            </div>
            <div className="grid gap-[2em] lg:gap-[6em]">
              <div>
                <Image
                  src="https://i.pinimg.com/564x/ca/59/42/ca5942f341bdd354f6b2f5e7e3e64301.jpg"
                  alt="image"
                  width={400}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="https://i.pinimg.com/564x/ca/59/42/ca5942f341bdd354f6b2f5e7e3e64301.jpg"
                  alt="image"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blogs */}
      <section className="bg-[#242735] py-[5em]">
        <div className="w-[80%] lg:w-[70%] mx-auto">
          <div className="grid lg:grid-cols-[45%,auto] gap-[2em] lg:gap-0">
            <div className="lg:h-[10em] flex flex-col gap-[2em]">
              <div className="flex flex-row gap-1">
                <span className=" self-center text-gray-400">
                  <GoDash />
                </span>
                <span className="subtext tracking-wider">Blog</span>
              </div>
              <h4 className="text-3xl font-bold">What's new?</h4>
            </div>
            <div>
              <BlogToggle />
              <div className="bg-gray-600 h-[0.4px]" />
              <BlogToggle />
              <div className="bg-gray-600 h-[0.4px]" />
              <BlogToggle />
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className="bg-[#333646] py-[5em]">
        <div className="w-[80%] lg:w-[70%] mx-auto gap-[3em] lg:gap-[2em] grid lg:grid-cols-[40%,auto]">
          <div className="lg:h-[10em] flex flex-col gap-[2em]">
            <h4 className="text-3xl font-semibold">
              Fullstack and frontend developer
            </h4>
            <p className=" subtext">
              I am a fast-paced self-learner whose passion is Coding! I love
              delivering visually appealing websites to end-users.
            </p>
            <a className=" text-yellow-500 cursor-pointer font-bold">
              More about me
            </a>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-[1em]">What's new?</h4>
            <BlogToggle />
            <div className="bg-gray-600 h-[0.4px]" />
            <BlogToggle />
            <div className="bg-gray-600 h-[0.4px]" />
            <BlogToggle />
          </div>
        </div>
      </section>
      {/* footer */}
      <section className="grid justify-center bg-[#333646] pt-[5em] pb-[8em]">
        <div className="grid gap-5">
          <h1 className="text-center">Maycodes</h1>
          <p className="text-center">Thanks for scrolling, that's all folks.</p>
          <ul className="flex flex-row gap-4 justify-center">
            <li>
              <div className="text-2xl cursor-pointer">
                <IoLogoInstagram />
              </div>
            </li>
            <li>
              <div className="text-2xl cursor-pointer">
                <FaLinkedinIn />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
