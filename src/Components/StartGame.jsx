// import React from "react";

// function StartGame({ toggle }) {
//   return (
//     <div className="w-full h-screen flex justify-center items-center  mt-5">
//       <div className="w-[50%] h-[50%] flex shadow-lg ">
//         <img className="" src="/images/dices.png" alt="" />
//         <div className="p-3 items-center mt-7 ms-6">
//           <h1 className="font-bold text-6xl p-3 mt-5">Dice Game</h1>
//           <button
//             onClick={toggle}
//             className="bg-zinc-900 text-white px-8 py-2 ms-6 rounded  border hover:border-black hover:text-black hover:bg-gray-100 text-2xl"
//           >
//             Play Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StartGame;



import React from "react";

function StartGame({ toggle }) {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-auto mt-5">
      <div className="w-full md:w-[50%] h-[60%] flex flex-col md:flex-row shadow-lg">
        {/* Dice Image */}
        <img className="w-full md:w-[50%] object-cover" src="/images/dices.png" alt="Dice" />
        
        {/* Game Info Section */}
        <div className="p-3 flex flex-col justify-center items-center md:items-start md:ml-6 mt-7">
          <h1 className="font-bold text-4xl md:text-6xl p-3 mt-5 text-center md:text-left">
            Dice Game
          </h1>
          <button
            onClick={toggle}
            className="bg-zinc-900 text-white px-8 py-2 md:px-10 md:py-3 rounded border hover:border-black hover:text-black hover:bg-gray-100 text-2xl mt-4 "
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
