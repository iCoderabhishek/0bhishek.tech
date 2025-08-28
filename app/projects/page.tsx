"use client";

import React from "react";
import Image from "next/image";
import ContactCard from "@/components/profile/AboutCard";
import { ProjectsCard } from "@/components/profile/ProjectsCard";
import BlogCard from "@/components/profile/BlogCard";
import Header from "@/components/outer/Header";
import LearnTimeline from "@/components/profile/LearnCard";
import { AllProjectsCard } from "@/components/profile/AllProjects";

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[#1a1a1a] text-white font-mono px-4 sm:px-6 py-10 selection:bg-neutral-600 overflow-hidden">
        {/* Vertical guides */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%]  top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-white/10" />
        </div>

        {/* Horizontal guides with text labels */}
        <AllProjectsCard />
        {/* Intro Section */}
      </main>
    </>
  );
}

function LineLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className="h-px bg-white/10 w-full relative">
      <span
        className={`absolute left-[10%] sm:left-[14%] lg:left-[18%] -translate-y-1/2 bg-[#1a1a1a] px-3 ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

export default App;
