import { useState } from "react";

function App() {
  // let counter=5
  // const addValue=()=>{
  //   counter += 1
  //   console.log("counter",counter);
  // }

  let [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      // setCounter(counter)

      //yaha pe counter increse nahi kar raha hai
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)

      //ab counter increase kar raha hai
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>chai and code</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value {counter}</button> <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
