import { useCallback, useState } from 'react'
import App1 from './app1'

function App() {
  let [add, setAdd] = useState(0)
  let [count,setcount]=useState(0)

  // function learning(){
  //   //some operation
  // }

// const learning =useCallback(()=>{
//   //some operation
// },[])

const learning =useCallback(()=>{
  //some operation
},[count])

  return (
    // <>
    // <h1>{add}</h1>
    //  <App1/>
    //  <button onClick={()=>setAdd(add+1)}>Addition</button>
    // </>

    // <>
    // <h1>{add}</h1>
    //  <App1/>
    //  <button onClick={()=>setAdd(add+1)}>Addition</button>
    // </>

    // <>
    // <h1>{add}</h1>
    //  <App1 user={learning}/>
    //  <button onClick={()=>setAdd(add+1)}>Addition</button>
    // </>

    //  <>
    //  <h1>{add}</h1>
    //   <App1 user={learning}/>
    //   <button onClick={()=>setAdd(add+1)}>Addition</button>
    // </>

    <>
    <h1>{add}</h1>
     <App1 user={learning} count={count}/>
     <button onClick={()=>setAdd(add+1)}>Addition</button>
     <h1>{count}</h1>
     <button onClick={()=>setcount(count+1)}>Count</button>
    </>

  )
}

export default App
