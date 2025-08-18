import React, { useState } from "react";

function StateDemo() {
  let [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={incr}>Incr count</button>
    </div>
  );
}

export default StateDemo;
