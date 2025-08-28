"use client";

import React from "react";
import Image from "next/image";
import ContactCard from "@/components/profile/AboutCard";
import { ProjectsCard } from "@/components/profile/ProjectsCard";
import BlogCard from "@/components/profile/BlogCard";
import Header from "@/components/outer/Header";
import LearnTimeline from "@/components/profile/LearnCard";
import AnimatedStatement from "@/components/ui/AnimatedText";
import me from "@/assets/images/me.png";
import { USER } from "@/data/user";

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white text-black dark:bg-[#1a1a1a] dark:text-white font-mono px-4 sm:px-6 py-10 selection:bg-neutral-300 dark:selection:bg-neutral-600 overflow-hidden">
        {/* Vertical guides */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%]  top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-white/10" />
        </div>

        {/* Horizontal guides with text labels */}
        <div className="absolute inset-0 pointer-events-none text-neutral-300">
          {/* First line */}
          <div className="top-[5.5%] sm:top-[5%] lg:top-[10%] left-0 right-0 h-px bg-white/10 relative">
            <span className="absolute left-[23%] sm:left-[14%] font-semibold lg:left-[18%] -translate-y-full px-3 text-base sm:text-lg  lg:text-xl select-text whitespace-nowrap">
              Abhishek Jha
            </span>
          </div>

          {/* Second line */}
          <div className="top-[6.5%] sm:top-[7%] lg:top-[12%] left-0 right-0 h-px bg-white/10 relative">
            <span className="absolute left-[23%] sm:left-[14%] lg:left-[18%] -translate-y-full px-3 text-sm sm:text-base lg:text-lg">
              <AnimatedStatement />
            </span>
          </div>

          {/* Third line */}
          <div className="top-[8%]  sm:top-[9%] lg:top-[14%] left-0  right-0 h-px bg-white/10 relative">
            <span className="absolute left-[23%] pb-1 sm:pb-0 lg:pb-0 sm:left-[14%] pt-6 lg:pt-0 lg:left-[18%] -translate-y-full px-3 text-sm sm:text-sm lg:text-lg lg:whitespace-nowrap">
              {USER.flipSentences[2]}
            </span>
          </div>
        </div>

        {/* Intro Section */}
        <section className="relative mt-[110px] lg:mt-34 md:mt-28 h-full">
          {/* Avatar (locked position) */}
          {/* Avatar (locked to same vertical line as text/labels) */}
          <div className="flex gap-8 justify-start relative z-10 left-[0%] sm:left-[6%] lg:left-[7%]">
            <Image
              src="https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg"
              alt="crosshair image"
              width={150}
              height={150}
              className="object-contain rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 "
            />
          </div>

          {/* Contact card */}
          {/* Contact card */}
          <div className="absolute left-[18%] sm:left-[14%] lg:left-[16%] max-w-md mt-[5%] m-5  text-base sm:mt-[10%] md:mt-2 lg:mt-5 mb-20 sm:mb-24 ">
            <ContactCard />
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative mt-[70%] sm:mt-[60%] md:mt-[400px] lg:mt-[290px]">
          <LineLabel text="Things I Make" className="text-lg text-gray-500" />
          <div className="relative mt-6 flex flex-col justify-center">
            <ProjectsCard />
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative mt-[90px]">
          <LineLabel text="Things I Write" className="text-lg text-gray-500" />
          <div className="mt-6">
            <BlogCard />
          </div>
        </section>

        {/* Education Section */}
        <section className="relative mt-[90px]">
          <LineLabel text="Things I Learn" className="text-lg text-gray-500" />
          <div className="mt-6">
            <LearnTimeline />
          </div>
        </section>
      </main>
    </>
  );
}

function LineLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className="h-px bg-white/10 w-full relative">
      <span
        className={`absolute left-[10%] sm:left-[14%] lg:left-[18%] -translate-y-1/2 bg-white dark:bg-[#1a1a1a] px-3 ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

export default App;
