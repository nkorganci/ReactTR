import React, { useState } from "react";

function Hooks01_Counter() {
  const [count, setCount] = useState(() => {
    console.log("run");
    return 4;
  });

  function increase() {
    setCount((t) => t + 1);
  }

  function decrease() {
    setCount((t) => t - 1);
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Hooks01_Counter;
