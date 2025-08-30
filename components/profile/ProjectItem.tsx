"use client";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";

export const ProjectItem = ({ project }: { project: Project }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="rounded-sm cursor-pointer overflow-hidden bg-[#2A2A2A] hover:bg-[#2F2F2F] transition-all duration-300 border border-gray-700 shadow-lg flex flex-col h-full">
      {/* Video / Image */}
      <div className="relative w-full aspect-[16/9] bg-black p-2">
        {!isVideoLoaded && project.imageSrc && (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-contain sm:object-cover rounded-md bg-black "
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
          className={`absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-contain rounded-md bg-black transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          {project.title} <ExternalLink size={16} />
        </h3>
        <span className="text-xs text-gray-400">{project.date}</span>
        <p className="text-sm text-neutral-300 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tags stay at bottom */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700/50 px-2 py-1 rounded-md text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
