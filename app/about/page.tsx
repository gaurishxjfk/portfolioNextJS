import React from "react";
import MainLayout from "../../components/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <article className="mt-[5%] tracking-wide	 w-[80%] sm:w-[45%] md:w-[35%] flex flex-col justify-center mx-auto sm:ml-[16%] md:ml-[22%] transition-all ease-linear duration-700">
        <h1 className="font-bold text-lg mb-8">A bit about me...😊</h1>
        <p className="text-sm">
          Always on a relentless pursuit to learn and evolve🚀 fueled by{" "}
          <span className="underline decoration-gray-600 decoration-2">
            curiosity
          </span>{" "}
          &{" "}
          <span className="underline decoration-gray-600 decoration-2">
            creativity
          </span>;
        </p>
        <br />
        <p className="text-sm">
          In addition to my work experience in development I have also
          dabbled in design which allows me to bring a unique perspective and
          giving me a well-rounded skillset that allows me to bring ideas to
          life from start to finish.
        </p>
        <br />
        <p className="text-sm">I am always
          seeking out new challenges and opportunities to expand my skills and
          make a positive impact in the tech industry.💻
        </p>
        <br />
        <p className="text-sm">
          Feel free to reach out{" "}
          <a
            href="https://twitter.com/gaurishxjfk"
            target="_blank."
            className="underline decoration-gray-600  decoration-2 hover:decoration-gray-300"
          >
            Twitter
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/gaurishnaik/"
            target="_blank."
            className="underline decoration-gray-600 decoration-2 hover:decoration-gray-300"
          >
            Linkedin
          </a>
          .
        </p>
        <p className="text-sm">
          Or send a{" "}
          <a
            href="mailto: itsgaurishnaik@gmail.com"
            target="_blank."
            className="underline decoration-gray-600  decoration-2 hover:decoration-gray-300"
          >
            mail
          </a>
          .
        </p>
        <br></br>
        <p className="text-sm">Thanks for reading🌱</p>
      </article>
    </MainLayout>
  );
};

export default page;
