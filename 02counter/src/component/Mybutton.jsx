import { useState } from "react";

import Myapp from "./card";

function App() {
    const [count,setcount]=useState(0)
    
    function handleClick(){
        setcount(count+1);
     }
    return (
        <>
        <h1>Counter that update both</h1>
        <Myapp user={count} onClick={handleClick}/>
        <Myapp user={count} onClick={handleClick}/>
        </>
    );
}
export default App