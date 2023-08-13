import React from "react";
import ProfilePic from "../assets/Profilepic.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white font-bold ">
            I'm a front-end developer
          </h2>
          <p className="text-gray-500 py-2 max-w-md">
            With a year of experience as a dedicated front-end developer, I've
            honed my skills in crafting captivating digital experiences. My
            proficiency spans React.js, HTML, CSS, and JavaScript, enabling me
            to architect seamless user interfaces that seamlessly blend design
            with functionality. My passion for innovation drives me to embrace
            new technology stacks, constantly seeking ways to elevate my
            projects
          </p>
          <div>
            <button className="group text-white  px-4 py-2 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={ProfilePic}
            alt="my pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
