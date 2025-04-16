import React from "react";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numbersSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <>
      <div>
        {/* Error Message */}
        {error && <p className="text-red-400 text-xl">{error}</p>}

        <div className="flex justify-center gap-3 mt-5 flex-wrap">
          {arrNumber.map((value, i) => (
            <p
              key={i}
              onClick={() => numbersSelectorHandler(value)}
              className={`w-16 h-16 flex items-center justify-center border-2 border-black text-3xl cursor-pointer transition-all duration-300 
                ${
                  selectedNumber === value
                    ? "bg-black text-white border-black"
                    : "bg-white text-black"
                } hover:bg-gray-200`}
            >
              {value}
            </p>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-2xl font-bold text-end">Select Score</p>
        </div>
      </div>
    </>
  );
};

export default NumberSelector;
