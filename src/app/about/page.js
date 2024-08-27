"use client";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
const ResumePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main className="relative scroll-smooth">
      {showMenu ? (
        <MobileNav toggleMenu={toggleMenu} />
      ) : (
        <Navbar toggleMenu={toggleMenu} />
      )}
      <section id="top" className=" bg-[#333646] min-h-screen relative">
        <section className="grid gap-[5em] lg:gap-0 lg:grid-cols-[40%,auto] w-[80%] lg:w-[70%] m-auto pt-[10em] pb-[5em]">
          <div className="flex flex-col gap-[3em] lg:gap-[7em] justify-between">
            <h1 className="text-[#eab308]">Professional Experience</h1>
          </div>
          <div className="grid gap-[3em]">
            <div className="grid grid-cols-[30%,auto] gap-3">
              <div className="flex flex-row gap-[3em] lg:gap-[7em] justify-between">
                <h1 className="text-white">2020 - 2022</h1>
              </div>
              <div className="grid gap-2 lg:gap-[7em] justify-between">
                <div className="grid gap-4">
                  <h3 className=" font-semibold text-white">
                    Junior Frontend Developer
                  </h3>
                  <h4 className=" text-[rgba(255,255,255,0.7)] text-xs italic">
                    Nawphire Company, Mandalay, Myanmar.
                  </h4>
                  <ul className="grid gap-2 text-sm">
                    <li className="codeLi font-light">
                      {" "}
                      Created admin panel dashboards and user-side web
                      applications utilizing <span className="border-b-2 pb-1 border-[rgba(234,178,8,0.72)]">Next.js, React.js, JavaScript,
                      Node.js, Material UI, and Tailwind CSS</span>.
                    </li>
                    <li className="codeLi font-light">
                      Collaborated closely with UI/UX designers, backend
                      developers, and database teams to craft robust web
                      applications.
                    </li>
                    <li className="codeLi font-light">
                      Designed various pages using Figma to align with project
                      requirements.
                    </li>
                    <li className="codeLi font-light">
                      Conducted thorough code reviews and implemented best
                      practices, enhancing code maintainability, reusability,
                      and reducing bugs by 30%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[30%,auto] gap-3">
              <div className="flex flex-row gap-[3em] lg:gap-[7em] justify-between">
                <h1 className="text-white">2019 - 2020</h1>
              </div>
              <div className="grid gap-2 lg:gap-[7em] justify-between">
                <div className="grid gap-4">
                  <h3 className=" font-semibold text-white">
                    Intern Frontend Developer
                  </h3>
                  <h4 className=" text-[rgba(255,255,255,0.7)] text-xs italic">
                    THtwin Innovation Lab, Mandalay, Myanmar.
                  </h4>

                  <ul className="grid gap-2 text-sm">
                    <li className="codeLi font-light">
                      Developed client-side web applications using <span className="border-b-2 pb-1 border-[rgba(234,178,8,0.72)]">React.js,
                      JavaScript, HTML, CSS, and Bootstrap</span>.
                    </li>
                    <li className="codeLi font-light">
                      Collaborated closely with UI/UX designers to transform
                      their designs into functional, responsive websites.
                    </li>
                    <li className="codeLi font-light">
                      Committed extensive hours to ensure timely project
                      delivery, working diligently day and night.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="top" className=" bg-[#333646] min-h-screen relative">
        <section className="grid gap-[5em] lg:gap-0 lg:grid-cols-[40%,auto] w-[80%] lg:w-[70%] m-auto pt-[5em] pb-[5em]">
          <div className="flex flex-col gap-[3em] lg:gap-[7em] justify-between">
            <h1  className="text-[#eab308]">Education</h1>
          </div>
          <div className="grid gap-[3em]">
            <div className="grid grid-cols-[30%,auto] gap-3">
              <div className="flex flex-row gap-[3em] lg:gap-[7em] justify-between">
                <h1 className="text-white">2023 - 2025</h1>
              </div>
              <div className="grid gap-2 lg:gap-[7em] justify-between">
                <div className="grid gap-4">
                  <h3 className=" font-semibold text-white">
                    Diploma in Information Technology
                  </h3>
                  <h4 className=" text-[rgba(255,255,255,0.7)] text-xs italic">
                    Nanyang Polytechnic, Singapore.
                  </h4>
                  <ul className="grid gap-3 text-sm">
                    <li className="bookLi">
                      {" "}
                      Prominent CourseWork
                      <p className="pt-2 font-light">
                        Data Sructures and Algorithms, Advanced Programming,
                        Fullstack Development, Database Management, Software
                        Engineering
                      </p>
                    </li>
                    <li className="bookLi">
                      {" "}
                      CCAs
                      <p className="pt-2 font-light">
                        Active Member of SIT club, Member of Ladies In Tech,
                        Member of Community Service Club
                      </p>
                    </li>
                    <li className="bookLi">
                      {" "}
                      CGPA
                      <p className="pt-2 font-light">3.88/4 (Director's Honor List)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[30%,auto] gap-3">
              <div className="flex flex-row gap-[3em] lg:gap-[7em] justify-between">
                <h1 className="text-white">2018 - 2021</h1>
              </div>
              <div className="grid gap-2 lg:gap-[7em] justify-between">
                <div className="grid gap-4">
                  <h3 className=" font-semibold text-white">
                  Bachelor of Engineering and Information Technology

                  </h3>
                  <h4 className=" text-[rgba(255,255,255,0.7)] text-xs italic">
                  Technological University Mandalay, Myanmar.
                  </h4>
                  <ul className="grid gap-3 text-sm">
                    <li className="bookLi">
                      {" "}
                      Prominent CourseWork
                      <p className="pt-2 font-light">
                        Data Sructures and Algorithms, Networking Fundamentals,
                        Programming Fundamentals, Computing Fundamentals
                      </p>
                    </li>
                    <li className="bookLi">
                      {" "}
                      CCAs
                      <p className="pt-2 font-light">
                        Member of music club, Secretary of Future Youth
                        Association
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ResumePage;
