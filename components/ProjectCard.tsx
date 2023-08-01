import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 pb-[2px] px-[1px] rounded-lg cursor-pointer
                  hover:shadow-[_0_20px_40px_rgba(29,29,29,_1)] hover:scale-105 transition-all ease-linear duration-100"
    >
      <div className="rounded-lg h-[45vh] bg-gradient-to-tr from-slate-900 via-black  to-slate-900 to-80% w-[35vh]">
        <Image
          src={project.image}
          alt="project cover"
          width={500}
          height={500}
          className="rounded-t-lg object-cover"
        />
        <div className="text-center px-2">
          <h2 className="my-2 font-bold">{project.name}</h2>
          <p className="text-xs text-slate-300 h-[12vh]">
            {project.description}
          </p>
        </div>
        <div className="text-center px-2 mt-3 flex justify-around ">
          <Link
            href={project.demoLink}
            target="_blank"
            className="text-sm underline decoration-slate-600 hover:decoration-slate-300 decoration-2 underline-offset-4 p-1 rounded-md"
          >
            &nbsp;Demo&nbsp;
          </Link>
          <Link
            href={"/"}
            className="text-sm underline decoration-slate-600 hover:decoration-slate-300 decoration-2 underline-offset-4 p-1 rounded-md"
          >
            &nbsp;Code&nbsp;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
