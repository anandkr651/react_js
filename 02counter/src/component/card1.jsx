import React from 'react'
import { useState } from 'react'

function Card() {
    let [counter,setcounter] = useState(0)
    
    function handleclick(){
        setcounter(counter+1)
    }
  return (
    <div>
      <h1>counter that can be reset</h1>
       <button onClick={handleclick}>clicked {counter} times</button> <br />
       
      </div>
  )
}

function Reset(){
    let[reset,setreset]=useState(0)

    function handleReset(){
        setreset(reset+1)
    }
    return(
        <>
        <Card key={reset} />
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Reset