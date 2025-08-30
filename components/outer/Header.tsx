"use client";
import React, { useState, useEffect } from "react";
import { MoonStar, Search, Github, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "../ui/Logo";

export default function Header() {
  const [isAffixed, setIsAffixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAffixed(scrollY > 50); // Show logo after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-affix={isAffixed}
      className="sticky inset-0 top-0 z-50 border-b border-white/10 bg-background max-w-screen overflow-x-hidden px-2 pt-2 data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80 transition-shadow duration-300 selection:bg-neutral-500"
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge border-white/10 px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container="true"
      >
        <a href="/" aria-label="Home" className="[&_svg]:h-8">
          <Logo
            style={{
              opacity: isAffixed ? 1 : 0,
              transform: isAffixed ? "translateY(0px)" : "translateY(-10px)",
              transition:
                "opacity 300ms ease-in-out, transform 300ms ease-in-out",
            }}
          />
        </a>

        <div className="h-full flex-1 border-x border-edge border-white/10 sm:-ml-2"></div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 sm:flex hover:text-white transition-all duration-300">
          <a
            href="https://drive.google.com/file/d/1CWt9WLw9Q_1b0jCiwooy5FH-1jjxbrI7/view?usp=sharing"
            className="font-mono text-sm font-medium text-foreground transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="/projects"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="/blogs"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            Blogs
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/iCoderabhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium outline-none transition-all hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
          >
            <Github className="size-5" />
            <span className="sr-only">GitHub</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-state={isMenuOpen ? "open" : "closed"}
            className="group/toggle flex size-8 flex-col items-center justify-center gap-1 sm:hidden"
          >
            <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45"></span>
            <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:-translate-y-[3px] group-data-[state=open]/toggle:-rotate-45"></span>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden overflow-hidden p-4 border-t border-edge border-white/10 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col gap-4 hover:text-white transition-all duration-300">
            <a
              href="https://drive.google.com/file/d/1CWt9WLw9Q_1b0jCiwooy5FH-1jjxbrI7/view?usp=sharing"
              className="font-mono text-sm font-medium text-foreground hover:text-white transition-all duration-300"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="font-mono text-sm font-medium text-muted-foreground"
            >
              Projects
            </a>
            <a
              href="/blogs"
              className="font-mono text-sm font-medium text-muted-foreground"
            >
              Blogs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
