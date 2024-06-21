import { useState } from "react";

function App (){
 
 let [count,setcount] =useState(3);

 function handleClick(){
    setcount(count+1);
 }

    return(
        <>
        <button onClick={handleClick}>
         clicked {count} times
        </button><br />
        </>
    );
}
export default App;