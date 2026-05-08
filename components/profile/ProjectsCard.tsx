import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectItem } from "./ProjectItem";

export const ProjectsCard = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-4xl mx-auto px-5 sm:px-15 lg:p-4 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS_DATA.slice(0, 2).map((project) => (
          <a
            href={project.liveUrl}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem key={project.id} project={project} />
          </a>
        ))}

        {/* Shadow below ProjectsCard */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-24 lg:h-20 w-full bg-linear-to-t from-background via-background/90 to-transparent" />

        {/* Show More button */}
        <a
          href="/projects"
          className="group absolute bottom-5 left-1/2 z-11 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm text-foreground/70 hover:text-foreground hover:border-foreground/35 transition-colors"
        >
          Show More
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
};
