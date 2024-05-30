import React from "react";

const About = () => {
  return (
    <div name="About" className="flex flex-col items-center h-screen w-screen" translate="no">
      <h2 className="font-semibold text-[40px]">About</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-white text-center mb-6" translate="no">
          Hello, I am a full-stack developer interested in building intuitive and attractive web applications. I have developed complete web applications, from front-end design and architecture to back-end implementation and maintenance.
        </p>
        <p className="text-white text-center" translate="no">
          I am a proactive person with a great capacity for learning and an analytical and creative mind. I enjoy the challenges involved in solving complex problems efficiently.
        </p>
      </div>
    </div>
  );
};

export default About;
