"use client";

import React from "react";
import Image from "next/image";
import ContactCard from "@/components/profile/AboutCard";
import { ProjectsCard } from "@/components/profile/ProjectsCard";
import BlogCard from "@/components/profile/BlogCard";
import Header from "@/components/outer/Header";
import LearnTimeline from "@/components/profile/LearnCard";
import ExperienceCard from "@/components/profile/ExperienceCard";
import AnimatedStatement from "@/components/ui/AnimatedText";
import abhishek from "@/assets/images/abhishek.png";
import { USER } from "@/data/user";
import { Logo } from "@/components/ui/Logo";
import { GradientOrbs } from "@/components/ui/GradientOrbs";

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white text-black dark:bg-[#1a1a1a] dark:text-white font-mono px-4 sm:px-6 py-10 selection:bg-neutral-300 dark:selection:bg-neutral-600 overflow-hidden">
        {/* Drifting gradient orbs (cursor-reactive) */}
        <GradientOrbs />

        {/* Vertical guides — hidden on mobile, decorative chrome only */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-0 bottom-0 w-px bg-foreground/15" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-foreground/15" />
        </div>

        {/* 🔥 Logo centered between guides */}
        <div className="absolute top-6 sm:top-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <Logo className="w-14 h-14 sm:w-24 sm:h-24 lg:w-35 lg:h-35 text-black dark:text-white" />
        </div>

        {/* Intro Section */}
        <section className="relative mt-28 sm:mt-44 lg:mt-52 px-5 sm:px-8 lg:px-[14%]">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8 items-start">
            {/* Avatar — stacked on mobile, side-by-side on sm+ */}
            <div className="shrink-0">
              <Image
                src={abhishek}
                alt="profile"
                width={150}
                height={150}
                priority
                className="object-contain rounded-full w-16 sm:w-28 lg:w-32 h-16 sm:h-28 lg:h-32"
              />
            </div>

            {/* Labels + contact, full width on mobile */}
            <div className="w-full sm:flex-1 sm:min-w-0 flex flex-col">
              <div className="border-b border-foreground/15 pb-2">
                <span className="font-semibold text-lg sm:text-lg lg:text-xl whitespace-nowrap">
                  Abhishek Jha
                </span>
              </div>

              <div className="border-b border-foreground/15 py-2">
                <span className="text-sm sm:text-base lg:text-lg">
                  <AnimatedStatement />
                </span>
              </div>

              <div className="border-b border-foreground/15 py-2">
                <span className="text-sm sm:text-sm lg:text-base">
                  {USER.flipSentences[2]}
                </span>
              </div>

              <div className="mt-6 sm:mt-8">
                <ContactCard />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="relative experience-section">
          <LineLabel
            text="Where I've Worked"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="mt-4 xs:mt-6">
            <ExperienceCard />
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative projects-section">
          <LineLabel
            text="Things I Make"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="relative mt-4 xs:mt-6 flex flex-col justify-center">
            <ProjectsCard />
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative blog-section">
          <LineLabel
            text="Things I Write"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="mt-4 xs:mt-6">
            <BlogCard />
          </div>
        </section>

        {/* Education Section */}
        <section className="relative education-section">
          <LineLabel
            text="Things I Learn"
            className="text-lg xs:text-xl text-foreground/55 tracking-tight"
          />
          <div className="mt-4 xs:mt-6">
            <LearnTimeline />
          </div>
        </section>
      </main>

      <style jsx>{`
        .experience-section,
        .projects-section,
        .blog-section,
        .education-section {
          margin-top: 80px;
        }

        @media (min-width: 640px) {
          .experience-section,
          .projects-section,
          .blog-section,
          .education-section {
            margin-top: 96px;
          }
        }
      `}</style>
    </>
  );
}

function LineLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className="h-px bg-foreground/15 w-full relative">
      <span
        className={`absolute left-[14%] lg:left-[18%] -translate-y-1/2 bg-background px-3 ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

export default App;
