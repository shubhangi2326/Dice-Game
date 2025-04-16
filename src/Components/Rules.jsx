import React from "react";

const Rules = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 p-5 shadow-xl bg-white rounded-lg max-w-md mx-auto">
      <div className="bg-[#fbf1f1] w-full rounded-lg p-5">
        <h1 className="font-bold text-3xl text-center mb-4">
          How to Play Dice Game
        </h1>

        <div className="text-xl space-y-3">
          <p className="p-1">1. Click on the dice image.</p>
          <p className="p-1">
            2. After clicking on the dice, if the selected number matches the
            dice number, you will get the same points as the dice number.
          </p>
          <p className="p-1">
            3. If your guess is incorrect, 2 points will be deducted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
