import React from "react";
import html from "../assets/html5-logo.png";
import js from "../assets/Portfolio/js-logo.png";
import css from "../assets/Portfolio/css3to.png";
import react from "../assets/Portfolio/react-logo.png";
import gitHub from "../assets/Portfolio/github-logo.png";
function Experience() {
  const experinces = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-400" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-400" },
    { id: 3, src: js, title: "JAVASCRIPT", style: "shadow-yellow-400" },
    { id: 4, src: react, title: "REACT", style: "shadow-blue-400" },
    { id: 5, src: gitHub, title: "GitHub", style: "shadow-gray-400" },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to to-black w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6">These are technologies I've worked with</p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0 text-center">
          {experinces.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 rounded-lg py-2" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
