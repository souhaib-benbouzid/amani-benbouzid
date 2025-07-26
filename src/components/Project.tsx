import Image from "next/image";

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
  comments?: string[];
};

export const ProjectCard = (props: Props) => {
  return (
    <a
      id={`project-${props.id}`}
      className="flex flex-col lg:flex-row items-start lg:items-center p-4 py-2 px-4 lg:p-0 max-w-sm lg:max-w-none hover:scale-105 transition-transform duration-300  rounded-lg "
      href={props.link}
    >
      {props.image && (
        <div className="relative w-full lg:w-[640px] h-56 lg:min-h-[480px] mb-3 lg:mb-0">
          <Image
            src={props.image}
            alt={props.title || "Project image"}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                View Case Study
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 lg:ml-14 lg:flex lg:flex-col lg:justify-center ">
        <span className="text-sm text-neutral-400 mb-2">
          {props.tags?.join(", ")}
        </span>
        <h3 className="text-lg font-semibold text-neutral-700 mb-4 line-clamp-2  dark:text-neutral-200">
          {props.title}
        </h3>
        <p className="text-sm text-neutral-600 mb-4 line-clamp-3  dark:text-neutral-400">
          {props.description}
        </p>

        {props.comments && (
          <ul className="mb-6 text-sm text-stone-500 w-full  dark:text-neutral-400">
            {props.comments.map((comment, index) => (
              <li
                key={index}
                className={`border-b-1 border-stone-200 dark:border-neutral-700 py-4 ${
                  index === 0 ? "border-t-1" : ""
                }`}
              >
                {comment}
              </li>
            ))}
          </ul>
        )}
        <button className="lg:hidden border border-stone-300 rounded px-4 py-2 text-sm text-neutral-700 hover:bg-stone-100 transition-colors mt-4">
          View Case Study
        </button>
      </div>
    </a>
  );
};
