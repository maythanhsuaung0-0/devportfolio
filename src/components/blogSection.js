import React from "react"
import BlogToggle from "@/components/BlogToggle";
import getPostMetaData from "../../utils/getPostMetaData";
import { GoDash } from "react-icons/go";
import Link from "next/link";
export const BlogSection=()=>{
const data = getPostMetaData('blogs') 
return (

 <section className="bg-[#242735] py-[5em]">
        <div className="w-[80%] lg:w-[70%] mx-auto">
          <div className="grid gap-[2em]">
            <div className=" flex flex-col gap-[2em]">
              <div className="flex flex-row gap-1">
                <span className=" self-center text-gray-400">
                  <GoDash/>
                </span>
                <span className="subtext tracking-wider">Blog</span>
              </div>
              <h4 className="text-3xl text-white font-bold">What's new?</h4>
            </div>
            <div>
              {data && data.map((blg) => (
                <Link href={`/blogs/${blg.slug}`} key={blg.slug}>
                  <BlogToggle val={blg} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
)}
