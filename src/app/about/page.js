"use client";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const ResumePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [experience, setexperience] = useState([]);
  const [education, seteducation] = useState([]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const fetchData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data.experience);
    setexperience(data.experience);
    seteducation(data.education);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="relative scroll-smooth bg-[#333646] min-h-screen">
      {showMenu ? (
        <MobileNav toggleMenu={toggleMenu} />
      ) : (
        <Navbar toggleMenu={toggleMenu} />
      )}
      <SideNav/>

      <section className=" relative">
        <section
          id="top"
          className="grid lg:grid-cols-[auto,70%] gap-3 pt-[8em] m-auto w-[80%] lg:w-[70%]"
        >
            <div className="rounded-full z-20 relative bg-[url('/myID.jpg')] w-[13em] h-[13em] bg-center bg-cover "></div>
    
          <div className="font-light text-white grid gap-1">
            <p>
              I am a frontend developer who is inspiring, diligent, innovative,
              and a fast learner. I thrive on solving complex problems and
              visually aesthetic web pages.{" "}
            </p>
            <p>
              My passion for coding started after the high school, I have been
              learning and building projects since then. I am proficient in
              HTML, CSS, JavaScript, React, and Next.js. I am also familiar with
              TailwindCSS, and other libraries like Redux, and React-Query. I
              have strong knowledge of low level programming languages such as
              C++, and Java. I am also familiar with Python and flask. I have experience in building
              RESTful APIs using Node.js and Express.js. I have also worked with
              databases like MySQL. 
            </p>
        
          </div>
          <div className=" text-white lg:col-span-2">
          <p>I have experience in deploying
              applications to platforms like Heroku, and Vercel. I am also
              familiar with version control systems like Git and GitHub. I am
              currently learning TypeScript and GraphQL to improve my skills
              further.</p>
            <p>
              Apart from coding, I enjoy playing chess which helps me improve my
              problem-solving and rational thinking skill.
            </p>
          </div>
            </section>
        <section className="grid gap-[2em] lg:gap-0 lg:grid-cols-[40%,auto] w-[80%] lg:w-[70%] m-auto  py-[5em]">
          <div className="">
            <h1 className="text-[#eab308]">Professional Experience</h1>
          </div>
          <div className="grid gap-[3em]">
            {experience.map((item, k) => (
              <div key={k} className="grid lg:grid-cols-[30%,auto] gap-3">
                <div className="flex flex-row gap-[3em] lg:gap-[7em] justify-between">
                  <h1 className="text-white">{item.year}</h1>
                </div>
                <div className="grid gap-2 lg:gap-[7em] justify-between">
                  <div className="grid gap-4">
                    <h3 className=" font-semibold text-white">{item.role}</h3>
                    <h4 className=" text-[rgba(255,255,255,0.7)] text-xs italic">
                      {item.company}
                    </h4>
                    <ul className="grid gap-2 text-sm">
                      {item.responsibilities.map((i, key) => (
                        <li key={key} className="codeLi font-light text-white">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-[2em] lg:gap-0 lg:grid-cols-[40%,auto] w-[80%] lg:w-[70%] m-auto pt-[2em] lg:pt-[5em] pb-[5em]">
          <div>
            <h1 className="text-[#eab308]">Education</h1>
          </div>
          <div className="grid gap-[3em]">
            {education.map((item, k) => (
              <div key={k} className="grid lg:grid-cols-[30%,auto] gap-3">
                <div className="flex flex-row gap-[3em] lg:gap-[7em] justify-between">
                  <h1 className="text-white">{item.year}</h1>
                </div>
                <div className="grid gap-2 lg:gap-[7em] justify-between">
                  <div className="grid gap-4">
                    <h3 className=" font-semibold text-white">
                      {item.degree} {item.major}
                    </h3>
                    <h4 className=" text-[rgba(255,255,255,0.7)] text-xs italic">
                      {item.school}
                    </h4>
                    <ul className="grid gap-3 text-sm">
                      <li className="bookLi">
                        {" "}
                        Prominent CourseWork
                        <p className="pt-2 font-light text-white">{item.courseWork}</p>
                      </li>
                      <li className="bookLi">
                        {" "}
                        CCAs
                        <p className="pt-2 font-light text-white">{item.cca}</p>
                      </li>
                      <li className="bookLi">
                        {" "}
                        CGPA
                        <p className="pt-2 font-light text-white">{item.cgpa}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ResumePage;
