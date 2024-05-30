import React from "react";
import projectImage from "../assets/project.jpg";
import projectImage1 from "../assets/pro.png";


const Projects = () => {
  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
    {
      description:
        "A didactic game for the community, suitable for both adults and minors, where you can test your JavaScript knowledge in a fun way 😊",
      projectsImageSrc: projectImage1,
      githubLink: "https://github.com/sergioironhacker/Digital-Space-Developer",
      deployLink: "https://sergioironhacker.github.io/Digital-Space-Developer/",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage, // usar la nueva imagen para el tercer proyecto
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col"
      translate="no"
    >
      <h2 className="font-semibold text-[40px]">Projects</h2>
      <div className="gap-4 mt-10 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p, index) => (
          <div key={index} className="relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500">
            <img className="object-cover" src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white">{p.description}</p>
              <div className="flex">
                <a href={p.githubLink}>Github</a>
                <a className="ml-4" href={p.deployLink}>
                  Deploy
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
