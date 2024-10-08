import React from "react";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import BlogToggle from "@/components/BlogToggle";
import Tooltip from "@/components/Tooltip";
import SideNav from "@/components/SideNav";
import getPostMetaData from "../../utils/getPostMetaData";
import Card from "@/components/Card";
import SimpleSlider from "@/components/Slider";

export default async function Home() {
  const data = await getPostMetaData('blogs');
  const apiUrl = process.env.NEXT_PUBLIC_SITE_URL
  const projects = await fetch(apiUrl + "/data.json");
  const res = await projects.json();
  const project = res.projects;
  console.log(project)
  const mainTools = []
  project.work.map((pj)=>{
    if(!mainTools.includes(pj.tools[0])){
      mainTools.push(pj.tools[0])
      console.log(pj.tools[0])
    }
  } )
  project.school.map((pj)=>{
    if(!mainTools.includes(pj.tools[0])){
      mainTools.push(pj.tools[0])
      console.log(pj.tools[0])
    }
  } )
  console.log(mainTools)
  return (
    <main className="relative scroll-smooth bg-[#343646]">
      <SideNav />
      <section id="top" className=" bg-[#333646] relative">
        <section className="h-screen grid align-middle">
          <div className="grid gap-[3em] lg:gap-0 lg:grid-cols-[60%,40%] w-[80%] lg:w-[70%] m-auto">
          <div className="flex flex-col gap-[3em] lg:gap-[7em] justify-between">
            <h1
              className=" font-extrabold text-white text-7xl relative before:content-[''] before:w-[2em] before:h-[1.5em]
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
                  <div className="text-2xl text-white cursor-pointer">
                    <IoLogoInstagram />
                  </div>
                </li>
                <li>
                  <div className="text-2xl text-white cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-[2em]">
            <div className="flex flex-row gap-1">
              <span className=" self-center text-gray-400">
                <GoDash />
              </span>
              <span className="subtext tracking-wider">Introduction</span>
            </div>
            <h4 className="text-3xl text-white font-semibold">
              Fullstack and frontend developer
            </h4>
            <p className=" subtext text-white">
              I am a fast-paced self-learner whose passion is Coding! I love
              delivering visually appealing websites to end-users.
            </p>
            <a className=" text-yellow-500 cursor-pointer font-semibold">
              More about me
            </a>
          </div>
          </div>
        </section>
      </section>
      {/* resume */}
      <section className=" bg-[#262734] pt-[5em] lg:pt-[10em] pb-[5em] lg:pb-[10em]">
        <div className="flex flex-col lg:flex-row gap-[4em] lg:gap-[3em] w-[80%] lg:w-[70%] m-auto">
          <div>
            <div className="lg:h-[10em] flex flex-col gap-[2em]">
              <div className="flex flex-row gap-1">
                <span className=" self-center text-gray-400">
                  <GoDash />
                </span>
                <span className="subtext tracking-wider">My Resume</span>
              </div>
              <h4 className="text-3xl font-bold text-white">Education</h4>{" "}
              <p className=" subtext w-full text-white">
                As a dedicated student, I earned a place on the Director's List
                throughout my years at polytechnic in Singapore...
              </p>
              <a className=" text-yellow-500 cursor-pointer font-bold">
                See My Resume
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-[2em]">
              <h4 className="text-3xl font-bold text-white">Work experience</h4>
              <p className=" subtext text-white">
                I spent a year as an intern at THtwin Innovation Lab before
                diving into two years as a full-time junior frontend developer
                at Nawphire. During this time, I gained invaluable experience
                working on real-world projects ....
              </p>
              <div className="flex flex-row gap-10">
                <div className="flex flex-row gap-3 ">
                  <span className="text-5xl text-yellow-500">3</span>
                  <span className="self-center italic text-sm text-white">
                    years of experience as Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skills */}
      <section className="bg-[#333646] py-[5em]">
        <div className="w-[80%] lg:w-[70%] mx-auto relative">
         
          <div className="pb-[5em] lg:pt-0 lg:pb-[7em] grid gap-[4em]">
            <h4 className="text-3xl font-bold text-center text-white">
              My Expertise{" "}
            </h4>
            <div className="flex flex-row flex-wrap gap-5 text-white justify-between">
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"figma"}>
                  <IoLogoFigma />
                </Tooltip>
              </span>
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"react"}>
                  <FaReact />
                </Tooltip>
              </span>
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"javascript"}>
                  <IoLogoJavascript />
                </Tooltip>
              </span>
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"python"}>
                  <FaPython />
                </Tooltip>
              </span>
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"c#"}>
                  <TbBrandCSharp />
                </Tooltip>
              </span>
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"css 3"}>
                  <IoLogoCss3 />
                </Tooltip>
              </span>
              <span className="text-6xl mb-5 hover:transform hover:rotate-12">
                <Tooltip text={"tailwind css"}>
                  <BiLogoTailwindCss />
                </Tooltip>
              </span>
              <span className="text-7xl  hover:transform hover:rotate-12">
                <Tooltip text={"mysql"}>
                  <SiMysql />
                </Tooltip>
              </span>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className=" flex flex-row justify-between gap-[2em]">
               <div className="grid gap-5">
               <div className="flex flex-row gap-1">
                  <span className=" self-center text-gray-400">
                    <GoDash />
                  </span>
                  <span className="subtext tracking-wider">Introduction</span>
                </div>
                
                <h4 className="text-3xl font-bold text-white">
                  My Projects
                </h4>
                <p className=" subtext text-white">
                  Projects I have done in the companies I worked for
                </p>
               
               </div>
                <a className=" text-yellow-500 cursor-pointer font-bold">
                  Explore More
                </a>
              </div>
            <div className="w-full m-auto mt-10">
             <SimpleSlider size={'sm'}>
              {project.work.map((pj,k)=>{
                return <div key={k} className="m-auto w-[90%]"><Card data={pj}  mainTools = {mainTools}/></div>
              })}
               {project.school.map((pj,k)=>{
                return <div key={k} className="m-auto w-[90%]"><Card data={pj}  mainTools = {mainTools}/></div>
              })}
              </SimpleSlider>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* blogs */}
      <section className="bg-[#242735] py-[5em]">
        <div className="w-[80%] lg:w-[70%] mx-auto">
          <div className="grid gap-[2em]">
            <div className=" flex flex-col gap-[2em]">
              <div className="flex flex-row gap-1">
                <span className=" self-center text-gray-400">
                  <GoDash />
                </span>
                <span className="subtext tracking-wider">Blog</span>
              </div>
              <h4 className="text-3xl text-white font-bold">What's new?</h4>
            </div>
            <div>
              {data.map((blg) => (
               <Link href={`/blogs/${blg.slug}`} key={blg.slug}>
                 <BlogToggle val={blg} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className=" bg-[#333646] pt-[5em] pb-[8em] relative">
        <div className="grid justify-center">
          <div className="grid gap-5">
            <h1 className="text-center text-white">Maycodes</h1>
            <p className="text-center text-white">
              Thanks for scrolling, that's all folks.
            </p>
            <ul className="flex flex-row gap-4 justify-center text-white">
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
        {/* {y > 1500 && (
          <div className="fixed bottom-5 lg:bottom-20 left-[80%] lg:left-[85%] w-fit bg-white text-[#333646] font-bold cursor-pointer text-2xl p-3 rounded-full">
            <a href="#top">
              <GoMoveToTop />
            </a>
          </div>
        )} */}
      </section>
    </main>
  );
}
