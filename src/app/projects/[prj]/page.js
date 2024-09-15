import SideNav from "@/components/SideNav";
import Link from "next/link";
import React from "react";
import { CgArrowLeft } from "react-icons/cg";

const ProjectDetailPage = async ({ params }) => {
  const apiUrl = process.env.NEXT_PUBLIC_SITE_URL
  const res = await fetch(apiUrl + "/data.json");
  const data = await res.json();
  const projects = data?.projects;
  const prj =
    projects.work.find(
      (project) => project.projectName.split(" ").join("") === params.prj
    ) ||
    projects.school.find(
      (project) => project.projectName.split(" ").join("") === params.prj
    );
  return (
    <main className="relative scroll-smooth bg-[#333646] min-h-screen">
      <SideNav />
      <div className="pt-[6em] lg:pt-[8em] w-[85%] lg:w-[70%] m-auto grid gap-3">
      <Link href='/projects'>
        <div className='flex flex-row text-white bg-[#47495f]   hover:bg-[#555771] w-fit rounded-md px-2 py-2 gap-2 mb-4'>
            <CgArrowLeft className='self-center'/>
           <span className='self-center text-sm'>Back</span>
        </div>
        </Link>
        <h1 className="font-bold text-white text-3xl">{prj.projectName}</h1>
        <div className="flex flex-row justify-between text-sm">
          <span className="italic text-gray-400">{prj.name}</span>
          <span className="text-gray-400">{prj.year}</span>
        </div>
        <div className="  flex flex-row flex-wrap gap-2">
          {prj.tools.map((tool, k) => (
            <span
              key={k}
              className="text-xs text-white bg-yellow-500 bg-opacity-30 px-2 py-1 rounded-full  w-fit "
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="text-white mt-8">{prj.details}</div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
