"use client";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

export const ProjectItem = ({ project }: { project: Project }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="group relative rounded-sm cursor-pointer overflow-hidden bg-foreground/4 hover:bg-foreground/7 hover:-translate-y-0.5 transition-all duration-300 border border-foreground/15 hover:border-foreground/25 shadow-sm flex flex-col h-full">
      {/* Video / Image well — locked dark in both modes */}
      <div className="relative w-full aspect-[16/9] bg-zinc-950">
        {!isVideoLoaded && project.imageSrc && (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-contain sm:object-cover"
            loading="lazy"
          />
        )}
        <video
          src={project.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-contain sm:object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 grow">
        {/* Date caption above title */}
        <span className="text-xs text-foreground/55">{project.date}</span>

        {/* Title with animated arrow */}
        <h3 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
          {project.title}
          <ArrowUpRight
            size={18}
            className="text-foreground/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-foreground"
          />
        </h3>

        {/* Description */}
        <p className="text-base text-foreground/85 leading-relaxed grow line-clamp-3">
          {project.description}
        </p>

        {/* Tags — bordered pills, matching Experience */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 border border-foreground/25 rounded-full text-foreground/70 font-medium hover:border-foreground/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Violet hairline that scales in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-violet-500/70 dark:bg-violet-400/65 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      />
    </div>
  );
};
