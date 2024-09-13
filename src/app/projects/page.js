"use client";
import SideNav from "@/components/SideNav";
import SimpleSlider from "@/components/Slider";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    setProjects(data.projects);
    console.log(data.projects);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="relative scroll-smooth bg-[#333646] min-h-screen">

      <SideNav/>
      <section id="top" className="pt-[6em] lg:pt-[8em] pb-[3em]  m-auto w-[80%] lg:w-[70%]">
        <div className="">
        <h1 className="font-bold text-white">Highlighted Projects</h1>
        </div>
        <div className="flex flex-col gap-[5em]">
        <div>
        <h2 className="pt-10 pb-[2em2 lg:pb-10 text-[#eab308]">Work Projects</h2>
        <SimpleSlider size={'lg'}>
          {projects.work?.map((project,k) => (
            <div key={k} className=" m-auto">
            <div className="grid lg:grid-cols-[40%,auto] gap-5 w-[90%]  m-auto">
              <div className="">
                <div className="text-white">{project.year}</div>
               <div className="text-white"> <span className="text-2xl font-bold mr-[1px]">{project.projectName[0]}</span><span>{project.projectName.slice(1)}</span></div>
               <div className="text-[rgba(255,255,255,0.7)] text-xs italic py-2">{project.name}</div>
              </div>
              <div className="text-white grid gap-5">
              <div className="text-white">
              {project.details}
              </div>
              <div className="  flex flex-row flex-wrap gap-2">
                {project.tools.map((tool,k)=>(
                  <span key={k} className="text-xs text-white px-2 py-1 border-solid border rounded-full border-gray-50 w-fit ">{tool}</span>
                ))}
              </div>
              </div>
             
            </div>
            </div>
          ))}
    
        </SimpleSlider>
        </div>
       <div>
       <h2 className="py-[3em] pb-[2em] text-[#eab308]">School Projects</h2>
        <SimpleSlider size={'lg'}>
          {projects.school?.map((project,k) => (
            <div key={k} className=" m-auto">
            <div className="grid lg:grid-cols-[40%,auto] gap-5 w-[90%]  m-auto">
              <div className="">
                <div className="text-white">{project.year}</div>
               <div className="text-white"> <span className="text-2xl font-bold mr-[1px]">{project.projectName[0]}</span><span>{project.projectName.slice(1)}</span></div>
               <div className="text-[rgba(255,255,255,0.7)] text-xs italic py-2">{project.name}</div>
              </div>
              <div className="text-white grid gap-5">
              <div className="text-white">
              {project.details}
              </div>
              <div className="  flex flex-row flex-wrap gap-2">
                {project.tools.map((tool,k)=>(
                  <span key={k} className="text-xs text-white px-2 py-1 border-solid border rounded-full border-gray-50 w-fit ">{tool}</span>
                ))}
              </div>
              </div>
             
            </div>
            </div>
          ))}
    
        </SimpleSlider>
       </div>
       <div className="pb-[3em]">
       <h2 className="py-[3em] pb-[2em] text-[#eab308]">My Own Projects</h2>
        <p className="text-white">Take a look at my projects at </p>
        <div className="p-3 border-solid border text-white rounded-md border-gray-50 w-fit my-3 cursor-pointer hover:bg-[rgba(44,44,44,0.26)]">
          <a target="_blank" href={"https://github.com/maythanhsuaung0-0"}>https://github.com/maythanhsuaung0-0</a>
        </div>
       </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
