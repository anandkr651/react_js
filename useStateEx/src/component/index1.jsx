import { useState } from "react";

function Mycheckbox(){
    let [liked,setLiked] = useState(true)
    function handlechange(e){
     setLiked(e.target.checked)
    }
    return(
        <>
        <div className="box my-5">
        <label>
            <input 
            type="checkbox" 
            checked={liked}  
            onChange={handlechange} className="mx-3"/>
            I liked this
        </label>
        <p>you {liked ? 'liked' :'did not like'} this.</p>
            </div>
        </>
    )
}
export default Mycheckbox
