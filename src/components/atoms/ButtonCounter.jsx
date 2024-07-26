import { useState } from "react";

function ButtonCounter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return <button onClick={incrementCounter}>Counter {counter}</button>;
}

export default ButtonCounter;
