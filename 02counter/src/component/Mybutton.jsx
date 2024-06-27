//we can pass the props

import { useState } from "react";
import Myapp from "./Mybutton1";

function App() {
    const [count,setcount]=useState(2)
    
    function handleClick(){
        setcount(count+1);
     }
    return (
        <>
        <h1>Counter that update both</h1>
        <Myapp user={count} onclick={handleClick}/>
        <Myapp user={count} onclick={handleClick}/>
        </>
    );
}
export default App
