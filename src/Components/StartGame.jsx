import React from "react";

function StartGame({ toggle }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-lg rounded overflow-hidden bg-white">
        {/* Dice Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            className="w-full h-full object-cover"
            src="/images/dices.png"
            alt="Dice"
          />
        </div>

        {/* Game Info Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center md:text-left mb-6">
            Dice Game
          </h1>
          <button
            onClick={toggle}
            className="bg-zinc-900 text-white px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl rounded border hover:border-black hover:text-black hover:bg-gray-100 transition"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
