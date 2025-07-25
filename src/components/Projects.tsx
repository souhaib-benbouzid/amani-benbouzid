import { ProjectCard } from "./Project";

export const Projects = () => {
  const projects = [
    // Example project data
    { id: 1, title: "Project One", description: "Description of project one." },
    { id: 2, title: "Project Two", description: "Description of project two." },
    {
      id: 3,
      title: "Project Three",
      description: "Description of project three.",
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section max-w-7xl mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Projects</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={`/images/project-${project.id}.jpg`} // Example image path
            link={`/projects/${project.id}`}
            tags={["tag1", "tag2"]} // Example tags
            comments={["Great project!", "Very informative."]} // Example comments
          />
        ))}
      </div>
    </section>
  );
};
