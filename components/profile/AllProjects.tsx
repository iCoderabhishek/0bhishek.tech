import { PROJECTS_DATA } from "@/data/projects";
import { ProjectItem } from "./ProjectItem";

export const AllProjectsCard = () => {
  return (
    <div className="relative max-w-full  md:max-w-4xl lg:max-w-4xl mx-auto   pl-15 pr-15 lg:p-6 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS_DATA.map((project, id) => (
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
        {/* <div className="absolute bottom-0 left-0 right-0 z-10 h-24 lg:h-32 lg:w-full w-[calc(100%-120px)] mx-auto bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent" /> */}
      </div>
    </div>
  );
};
