import { Project } from "@/types";
import { ProjectCard } from "./Project";

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Platform for managing both job postings and applications.",
      description:
        "Job Browser is a professional pre-launched hiring dashboard designed to bridge the gap between tech job seekers and employers looking to hire top talent.",
      tags: ["Dashboard", "Job Portal"],
      comments: ["Role : UI/UX Designer", "Final project of Gomycode."],
      image: "/images/dashboard.png",
      link: "/projects/job-browser",
    },
    {
      id: 2,
      title: "Space for structured, self-paced dental learning and exam prep.",
      description:
        "DentalPathway is a  modern, student-centered platform designed to support dental students throughout their academic journey.",
      tags: ["Website", "Education"],
      comments: ["Role : UI/UX Designer", "Personal Project."],
      image: "/images/dental-pathway.png",
      link: "/projects/dental-pathway",
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto py-32 bg-white ">
      <h1 className="text-4xl font-semibold text-center mb-20">Projects</h1>
      <div className="flex flex-col justify-center space-y-8 lg:space-y-32">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
            comments={project.comments}
            image={project.image}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
