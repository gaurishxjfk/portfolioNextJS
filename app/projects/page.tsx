import React from "react";
import MainLayout from "../../components/MainLayout";
import ProjectCard from "../../components/ProjectCard";
import projectData from "../../lib/projectdata.json";

const page = () => {
  return (
    <MainLayout>
      <section className="mt-[5%] w-[90%] md:w-[75%]  flex flex-wrap gap-12 justify-center mx-auto transition-all ease-linear duration-700">
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    </MainLayout>
  );
};

export default page;
