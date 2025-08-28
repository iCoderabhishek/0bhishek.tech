import { PROJECTS_DATA } from "@/data/projects";
import { ProjectItem } from "./ProjectItem";

export const ProjectsCard = () => {
  return (
    <div className="relative max-w-full  md:max-w-4xl lg:max-w-4xl mx-auto   pl-15 pr-15 lg:p-4 overflow-hidden ">
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
        <div className="absolute bottom-0 left-0 right-0 z-10 h-24 lg:h-20 lg:w-full w-[calc(100%-120px)] mx-auto bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent" />

        {/* Show More button */}
        <a
          className="absolute bottom-5 left-1/2 z-[11] flex -translate-x-1/2 items-center gap-1 rounded-sm border bg-neutral-700/40 px-2 py-1 text-xs text-neutral-200"
          href="/projects"
        >
          Show More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
