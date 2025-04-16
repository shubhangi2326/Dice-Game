// import React from 'react'

// const Rules = () => {
//   return (
//     <div className='flex flex-col justify-center items-center mr-[15%] p-5 shadow-xl '>
//       <div className='bg-[#fbf1f1] '>
//       <h1 className='font-bold text-3xl p-2'>How to play dice game</h1>
      
//       <div className='text-xl '>
//       <p className='p-1'>Click on dice image</p>
//       <p className='p-1'>after click on dice if selected number is equal to dice number you will get same point as dice {""}</p>
//       <p className='p-1'>if you will get wrong guess then 2 point will be deducted</p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Rules





import React from 'react';

const Rules = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 p-5 shadow-xl bg-white rounded-lg max-w-md mx-auto">
      <div className="bg-[#fbf1f1] w-full rounded-lg p-5">
        <h1 className="font-bold text-3xl text-center mb-4">How to Play Dice Game</h1>

        <div className="text-xl space-y-3">
          <p className="p-1">1. Click on the dice image.</p>
          <p className="p-1">2. After clicking on the dice, if the selected number matches the dice number, you will get the same points as the dice number.</p>
          <p className="p-1">3. If your guess is incorrect, 2 points will be deducted.</p>
        </div>
      </div>
    </div>
  );
}

export default Rules;
