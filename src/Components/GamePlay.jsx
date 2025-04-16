// import React, { useState } from 'react'
// import TotalScore from './TotalScore'
// import NumberSelector from './NumberSelector'
// import RoleDice from './RoleDice'
// import Rules from './Rules'
// const GamePlay = () => {
//       const [score , setScore]=useState(0);
//       const[selectedNumber, setSelectedNumber]=useState();
//       const [currentDice, setCurrentDice]=useState(1);
//          const [error, setError]=useState("");
//          const [showRules, setShowRules]=useState(false)
//       const generateRandomNumber = (min,max)=>{
//             return Math.floor(Math.random() * (max-min) + min)
//       }
//       const roleDice = ()=>{
//             if(!selectedNumber){
//                   setError("You have not selected any number");
//                   return;
//             }
//             const randomNumber = generateRandomNumber(1,7);
//             setCurrentDice((prev)=>randomNumber);
//             if(selectedNumber === randomNumber){                  setScore((prev)=>prev + randomNumber);
//             }
//             else{
//                   setScore((prev)=>prev -2);
//             }
//             setSelectedNumber(undefined)
            
//       }
      
//       const resetScore = () =>{
//             setScore(0);
//       }
//   return (
//     <>
//     <div className='w-full '>
//     <div className='w-[70%] flex  justify-between items-center mt-20 gap-9 p-5'>
//     <TotalScore score={score}/>
//     <NumberSelector
//      error={error}
//      setError={setError}
//      selectedNumber={selectedNumber}
//     setSelectedNumber={setSelectedNumber}/>
//     </div>
    
//     </div>
//     <RoleDice currentDice={currentDice}
//     roleDice={roleDice}/>
//     <div className='w-full flex flex-col  justify-center items-center p-2'>
//    <div className='w-[20%] mr-[25%] flex flex-col justify-center items-center gap-3'>
//    <button onClick={resetScore} className="bg-zinc-900 py-3 px-20 rounded text-white border hover:border-black hover:text-black hover:bg-gray-100 text-3xl">Reset</button>
//    <button className="bg-zinc-900 py-3 px-20 rounded text-white border hover:border-black hover:text-black hover:bg-gray-100 text-3xl"
//    onClick={()=>setShowRules((prev) => !prev)}
//    >{
//       showRules ? "Hide" : "Show"} Rules</button>
//    </div>
//     </div>
//    {showRules &&  <Rules/>}
//     </>
//   )
// }

// export default GamePlay



import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between items-center mt-10 gap-9 p-5">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="w-full flex flex-col justify-center items-center p-2">
        <div className="w-[60%] md:w-[20%] flex flex-col justify-center items-center gap-3">
          <button
            onClick={resetScore}
            className="bg-zinc-900 py-3 px-8 md:px-20 rounded text-white border hover:border-black hover:text-black hover:bg-gray-100 text-xl md:text-3xl"
          >
            Reset
          </button>
          <button
            className="bg-zinc-900 py-3 px-8 md:px-20 rounded text-white border hover:border-black hover:text-black hover:bg-gray-100 text-xl md:text-3xl"
            onClick={() => setShowRules((prev) => !prev)}
          >
            {showRules ? "Hide" : "Show"} Rules
          </button>
        </div>
      </div>

      {showRules && <Rules />}
    </>
  );
};

export default GamePlay;

