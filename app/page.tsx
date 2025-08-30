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
import { Logo } from "@/components/ui/Logo";

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-white text-black dark:bg-[#1a1a1a] dark:text-white font-mono px-4 sm:px-6 py-10 selection:bg-neutral-300 dark:selection:bg-neutral-600 overflow-hidden">
        {/* Vertical guides */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[12%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-white/10" />
        </div>

        {/* 🔥 Logo centered between guides */}
        <div className="absolute  top-[2%] lg:top-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <Logo className="w-20 h-20 lg:w-35 lg:h-35 text-black dark:text-white" />
        </div>

        {/* Horizontal guides with text labels */}
        <div className="absolute inset-0 pointer-events-none text-neutral-300">
          {/* First line - Name */}
          <div className="top-[5.5%] sm:top-[5%] lg:top-[10%] left-0 right-0 h-px bg-white/10 relative">
            <span className="absolute left-[14%] lg:left-[18%] -translate-y-full px-3 font-semibold select-text whitespace-nowrap">
              <span className="text-md xs:text-base sm:text-lg lg:text-xl">
                Abhishek Jha
              </span>
            </span>
          </div>

          {/* Second line - Animated Statement */}
          <div className="top-[6.5%] sm:top-[7%] lg:top-[12%] left-0 right-0 h-px bg-white/10 relative">
            <span className="absolute left-[14%] lg:left-[18%] -translate-y-full px-3">
              <span className="text-sm xs:text-sm sm:text-base lg:text-lg">
                <AnimatedStatement />
              </span>
            </span>
          </div>

          {/* Third line - Description */}
          <div className="top-[7.9%]  sm:top-[9%] lg:top-[14%] left-0 right-0 h-px mt-1 bg-white/10 relative">
            <span className="absolute left-[14%]  lg:left-[18%] -translate-y-full px-3 lg:pt-0 max-w-[250px] sm:max-w-[250px] md:max-w-[300px] w-auto">
              <span className="text-sm xs:text-sm sm:text-sm lg:text-lg lg:whitespace-nowrap ">
                {USER.flipSentences[2]}
              </span>
            </span>
          </div>
        </div>

        {/* Intro Section */}
        <section className="relative mt-[120px] xs:mt-[130px] sm:mt-28 md:mt-28 lg:mt-34 h-full">
          {/* Avatar - responsive positioning */}
          <div className="flex gap-8 justify-start relative z-10">
            {/* Hide avatar on screens < 426px */}
            <div className="hidden sm:block avatar-container">
              <Image
                src="https://pbs.twimg.com/profile_images/1792263106363564032/84ENGWSS_400x400.jpg"
                alt="crosshair image"
                width={150}
                height={150}
                priority
                className="object-contain rounded-full w-20 xs:w-24 sm:w-28 lg:w-32 h-20 xs:h-24 sm:h-28 lg:h-32"
              />
            </div>
          </div>

          {/* Contact card */}
          <div className="contact-card-wrapper">
            <ContactCard />
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative projects-section">
          <LineLabel
            text="Things I Make"
            className="text-base xs:text-lg text-gray-500"
          />
          <div className="relative mt-4 xs:mt-6 flex flex-col justify-center">
            <ProjectsCard />
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative blog-section">
          <LineLabel
            text="Things I Write"
            className="text-base xs:text-lg text-gray-500"
          />
          <div className="mt-4 xs:mt-6">
            <BlogCard />
          </div>
        </section>

        {/* Education Section */}
        <section className="relative education-section">
          <LineLabel
            text="Things I Learn"
            className="text-base xs:text-lg text-gray-500"
          />
          <div className="mt-4 xs:mt-6">
            <LearnTimeline />
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Mobile-specific styles for 320px, 375px, 425px */

        /* Avatar positioning */
        .avatar-container {
          position: absolute;
          left: 0%;
          top: -50px;
        }

        /* inside your <style jsx> */
        @media (max-width: 426px) {
          .avatar-container {
            display: none;
          }
        }

        @media (min-width: 640px) {
          .avatar-container {
            left: 0%;
            top: 0;
            position: relative;
          }
        }

        @media (min-width: 1024px) {
          .avatar-container {
            left: 7%;
            position: relative;
          }
        }

        /* Contact card positioning */
        .contact-card-wrapper {
          position: absolute;
          left: 14%;
          max-width: 28rem;
          margin: 12% 1.25rem 5rem 1.25rem;
          font-size: 1rem;
        }

        /* iPhone SE (320px) */
        @media (max-width: 320px) {
          .contact-card-wrapper {
            left: 3%;
            margin-top: 69%;
            margin-bottom: 5rem;
            max-width: calc(100vw - 20%);
          }
        }
        @media (min-width: 321px) and (max-width: 360px) {
          .contact-card-wrapper {
            left: 5%;
            margin-top: 48%;
            margin-bottom: 1rem;
            max-width: calc(100vw - 24%);
          }
        }

        /* iPhone 12/13 Mini (375px) */
        @media (min-width: 356px) and (max-width: 376px) {
          .contact-card-wrapper {
            left: 8%;
            margin-top: 39%;
            margin-bottom: 1rem;
            max-width: calc(100vw - 24%);
          }
        }

        /* iPhone XR/11 Pro Max (425px) */
        @media (min-width: 377px) and (max-width: 426px) {
          .contact-card-wrapper {
            left: 9%;
            margin-top: 25%;
            margin-bottom: 1rem;
            max-width: calc(100vw - 28%);
          }
        }

        @media (min-width: 640px) {
          .contact-card-wrapper {
            margin-top: 10%;
            margin-bottom: 6rem;
          }
        }

        @media (min-width: 768px) {
          .contact-card-wrapper {
            margin-top: 0.5rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-card-wrapper {
            left: 16%;
            margin-top: 1.25rem;
          }
        }

        /* Section spacing for mobile */
        .projects-section {
          margin-top: 400px;
        }

        @media (min-width: 320px) and (max-width: 425px) {
          .projects-section {
            margin-top: 420px;
          }
        }

        @media (min-width: 640px) {
          .projects-section {
            margin-top: 60%;
          }
        }

        @media (min-width: 768px) {
          .projects-section {
            margin-top: 400px;
          }
        }

        @media (min-width: 1024px) {
          .projects-section {
            margin-top: 290px;
          }
        }

        .blog-section,
        .education-section {
          margin-top: 70px;
        }

        @media (min-width: 320px) and (max-width: 425px) {
          .blog-section,
          .education-section {
            margin-top: 80px;
          }
        }

        @media (min-width: 640px) {
          .blog-section,
          .education-section {
            margin-top: 90px;
          }
        }
      `}</style>
    </>
  );
}

function LineLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className="h-px bg-white/10 w-full relative">
      <span
        className={`absolute left-[14%] lg:left-[18%] -translate-y-1/2 bg-white dark:bg-[#1a1a1a] px-3 ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

export default App;
