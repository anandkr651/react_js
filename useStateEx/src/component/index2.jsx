import { useState } from "react";

function Form (){
    let [name,setName] =useState("anand");
    let [age,setAge]= useState(21);
    return(
        <>
         <div className="box">
            <input 
            value={name}
            onChange={e=>setName(e.target.value)} 
            className="bg-white text-black px-3 mb-4"/> <br/>
            <button onClick={()=>setAge(age+1)}>Increment age</button>
            <p>Hello, {name}. you are {age}. </p>
         </div>
        </>
    )
}
export default Form