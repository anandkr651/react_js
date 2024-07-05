import { useState } from "react";

function App() {

  // let counter=5
  // const addValue=()=>{
  //   counter += 1
  //   console.log("counter",counter);
  // }

  let [counter, setCounter] = useState(1);  
  // useState --> useState jo hai wah state to change karene ki liye responsible hai .change karene ka matlab yah nahi hai ki apke value ko update kar de. ise change ko propagate kiya jata hai UI ke ander (dom ke ander).

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
      console.log(counter); //when we see the counter value in the console then previous value is printed because of usestate is the asynchronous, which means if you log the state immediately after calling the update function you will see the old state value 
    }
  };
  return (
    <>
      <h1>chai and code</h1>
      <h2>counter value:{counter}</h2>

      {/* addValue() --> yaha pe ham reference pass karna chate hai ki jab user button pe click karega tab number increase hoga ise liye ham yaha pe addValue likhe hai */}
      <button onClick={addValue}>add value {counter}</button> <br />  
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
