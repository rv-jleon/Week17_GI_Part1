import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [counter, setCounter] = React.useState(0);

  function incrementCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={incrementCounterHandler}>Increment</button>
    </div>
  );
}