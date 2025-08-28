"use client";

import React from "react";
import Image from "next/image";
import ContactCard from "@/components/profile/AboutCard";
import { ProjectsCard } from "@/components/profile/ProjectsCard";
import BlogCard from "@/components/profile/BlogCard";
import Header from "@/components/outer/Header";
import LearnTimeline from "@/components/profile/LearnCard";
import AllBlogCard from "@/components/profile/AllBlogs";

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[#1a1a1a] text-white font-mono px-4 sm:px-6 py-10 selection:bg-neutral-600 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%]  top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-white/10" />
        </div>

        <AllBlogCard />
      </main>
    </>
  );
}

export default App;
