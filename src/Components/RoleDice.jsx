
// const RoleDice = ({roleDice,currentDice}) => {

    
//   return (
//   <>
//     <div className='flex justify-center items-center flex-col mr-[25%] mt-5  cursor-pointer gap-2'
//     onClick={roleDice} >
//       <img className='' src={`/images/dice/dice_${currentDice}.png`} alt="" />
//       <p className="text-2xl">Click on Dice to roll</p>
        
//       </div>
//   </>
//   )
// }

// export default RoleDice


const RoleDice = ({ roleDice, currentDice }) => {
      return (
        <div 
          className="flex justify-center items-center flex-col mt-5 cursor-pointer gap-2 hover:scale-105 transition-all duration-300"
          onClick={roleDice}
        >
          {/* Dice Image */}
          <img 
            src={`/images/dice/dice_${currentDice}.png`} 
            alt="Dice" 
            className="w-32 h-32"  // Size the dice image properly
          />
          {/* Text */}
          <p className="text-2xl mt-2">Click on Dice to roll</p>
        </div>
      );
    }
    
    export default RoleDice;
    