// import React from 'react'

// const TotalScore = ({score}) => {
//   return (
//     <div>
//       <div className='m-auto p-5 ms-6'>
//       <h1 className='text-8xl font-bold'>{score}</h1>
//       <p className='font-bold text-3xl'>Total Score</p>
//     </div>
//     </div>
//   )
// }

// export default TotalScore

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
