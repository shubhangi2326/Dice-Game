import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-white shadow-xl rounded-lg">
      <h1 className="text-6xl md:text-8xl font-bold text-center text-gray-800">
        {score}
      </h1>
      <p className="font-bold text-xl md:text-3xl text-center mt-2 text-gray-600">
        Total Score
      </p>
    </div>
  );
};

export default TotalScore;
