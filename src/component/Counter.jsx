import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    console.log("clicked :", count);
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <button onClick={addValue}>add a value</button>
        <h4>Counter Value : {count}</h4>
      </div>
      <div>
        <button onClick={removeValue}>remove value</button>
      </div>
    </div>
  );
};

export default Counter;
