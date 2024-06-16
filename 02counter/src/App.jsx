import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5

let [counter,setCounter] = useState(15);
 const addValue=()=>{
  if(counter<20){
    counter = counter + 1;
    setCounter(counter)
  }
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>chai and code</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value {counter}</button> <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      </>
  )
}

export default App
