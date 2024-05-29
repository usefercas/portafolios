import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className=" flex flex-col items-center  h-screen w-screen "
    >
      <h2 className="font-semibold text-[40px]">About</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-white">
          Hola soy un desarrollador full-stack interesado en construir aplicaciones web intuitivas y atractivas.

          <br />
          He desarrollado aplicaciones web completas,
          desde el diseño y la arquitectura del front-end hasta la implementacion y el mantenimiento del back-end.
          <br />
          elit. Distinctio, asperiores quia ipsum sit dolores, exercita{" "}
        </p>
        <p className="text-white">
          Soy una poersona proactiva,
          con gran capacidad de aprendizaje y una mente analitica y creativa .Disfruto
          <br />
          de los desafioas involucrados en resolver problemas complejos de manera eficiente .
        
          <br />
         
        </p>
      </div>
    </div>
  );
};

export default About;