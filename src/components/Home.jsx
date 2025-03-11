import React from "react";
import developerHeader from "../assets/header1.png";
import header from "../assets/header.png";
import { Link } from "react-scroll";
import './YourCSSFile.css'; // Asegúrate de importar tu archivo CSS aquí

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <img alt="header" src={header} className="md:hidden w-screen" />
      <div className="md:h-20 min-[700px]:hidden bg-[#2B2B29]"></div>
      <img
        alt="developer"
        src={developerHeader}
        className="absolute left-[50%] top-[350px] md:left-[20%] md:static"
      />

      <div className="absolute left-[10%] top-[30%] md:left-[10%] md:top-[25%] p-6 md:static w-[80%] md:w-auto text-black text-[24px] md:text-[32px] xl:text-[40px] font-normal">
        <p className="typewriter-text" translate="no">Hi! I'm Use, a software developer</p>
        <div className="mt-4">
          <Link
            className="text-[16px] md:text-[20px] text-white bg-slate-500 p-4 inline-block"
            to="Projects"
            smooth="500"
           translate="no">
            Projects
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
