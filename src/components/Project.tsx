import Image from "next/image";

type Props = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  tags?: string[];
  comments?: string[];
};

export const ProjectCard = (props: Props) => {
  return (
    <div className="project-card p-4 border rounded-lg shadow-sm hover:shadow-md transition max-w-sm md:max-w-md">
      {props.image && (
        <Image
          src={props.image}
          alt={props.title || "Project image"}
          width={800}
          height={192}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link}>View Project</a>
      <div>
        {props.tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
