import React from "react";
import RockPaperScissor from "../assets/Portfolio/RPSgame.jpg";
import Monster from "../assets/Portfolio/Monster.png";
import Shopping from "../assets/Portfolio/Shopping.png";

function PortFolio() {
  const portfolis = [
    {
      id: 1,
      src: Shopping,
      code: "https://github.com/PrabhakarNagarajan/KingShoppingApp",
      demo: `https://king-shopping-app.netlify.app/`,
    },
    {
      id: 2,
      src: Monster,
      code: "https://github.com/PrabhakarNagarajan/MonsterRolodex",
      demo: "https://monsterrolladex.netlify.app/",
    },
    {
      id: 3,
      src: RockPaperScissor,
      code: "https://github.com/PrabhakarNagarajan/Rock-paper-scissor-game",
      demo: "https://prabhakarnagarajan.github.io/Rock-paper-scissor-game/",
    },
  ];
  return (
    <div
      name="PortFolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PortFolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolis.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex justify-center items-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
