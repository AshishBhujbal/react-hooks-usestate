import React, { useState } from "react";

function MyComp() {
  const [count, setCount] = useState(0);

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button className="btn-i" onClick={increment}>
        +
      </button>
      <button className="btn-d" onClick={decrement}>
        -
      </button>
    </div>
  );
}
export default MyComp;
