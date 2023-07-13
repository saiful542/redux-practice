import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <div className="pb-36 pt-36 font-bold">
        <h1 className="text-6xl">{count}</h1>
      </div>
      <div className="flex justify-center gap-16 mt-10">
        <button
          onClick={() => {
            setCount((previousCount) => previousCount + 1);
          }}
          className="transition-all btn text-white rounded-lg hover:bg-green-600 px-10 py-5 bg-green-500"
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((previousCount) => previousCount - 1);
          }}
          className="transition-all btn text-white rounded-lg hover:bg-red-600 px-10 py-5 bg-red-500"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
