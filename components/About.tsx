import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-2xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center text-lg">
          Proffesional in Data Engineer and Developer
          <br />
          I have expertise in various programming languages like JavaScript, Python, and PHP, as well as frameworks like React.js and Laravel. I also have a strong knowledge of SQL and NoSQL databases, and experience with DevOps and cloud computing
          <br />
          Translate a equipped from many Technology stack and Tools
        </p>
      </div>
    </section>
  );
};

export default About;
