// import { useState } from 'react'
import Card from "./component/card";

function App() {
  // const [count,setcount]=useState(0)
  // let myobj={
  //   username:"hitesh",
  //   age:21
  // }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card Username="chaiaurcode" BtnText="click me" />
      <Card Username="hitesh" />
    </>
  );
}
export default App;
