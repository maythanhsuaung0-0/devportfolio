import Card from "@/components/Card";
import SideNav from "@/components/SideNav";
import SimpleSlider from "@/components/Slider";
import React from "react";

const ProjectsPage = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL+'/data.json');
    const data = await res.json();
    const projects = data.projects;
    const mainTools = []
    projects.work.map((pj)=>{
      if(!mainTools.includes(pj.tools[0])){
        mainTools.push(pj.tools[0])
        console.log(pj.tools[0])
      }
    } )
    projects.school.map((pj)=>{
      if(!mainTools.includes(pj.tools[0])){
        mainTools.push(pj.tools[0])
        console.log(pj.tools[0])
      }
    } )
  return (
    <main className="relative scroll-smooth bg-[#333646] min-h-screen">

      <SideNav/>
      <section id="top" className="pt-[6em] lg:pt-[8em] pb-[3em]  m-auto w-[80%] lg:w-[70%]">
        <div className="">
        <h2 className='text-3xl font-bold mb-10 text-yellow-500'>Highlighted Projects</h2>
        </div>
        <div className="flex flex-col gap-[5em]">
        <div>
        <h2 className="pt-10 pb-[2em2 lg:pb-10 text-white font-bold">Work Projects</h2>
        <SimpleSlider size={'sm'}>
          {projects.work?.map((project,k) => (
            <Card mainTools={mainTools} key={k} data={project}/>
          ))}
    
        </SimpleSlider>
        </div>
       <div>
       <h2 className="py-[3em] pb-[2em] text-white font-bold">School Projects</h2>
        <SimpleSlider size={'sm'}>
          {projects.school?.map((project,k) => (
             <Card mainTools={mainTools} key={k} data={project}/>
          ))}
    
        </SimpleSlider>
       </div>
       <div className="pb-[3em]">
       <h2 className="py-[3em] pb-[2em] text-white font-bold">My Own Projects</h2>
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
