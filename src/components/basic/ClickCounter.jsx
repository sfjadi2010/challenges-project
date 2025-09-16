import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
        <h2 className="pb-5 text-2xl font-bold">Click Counter</h2>
      <div>{count}</div>
      <div>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ClickCounter;
