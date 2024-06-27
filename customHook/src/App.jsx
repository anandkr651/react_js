import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(0)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

  return (
    <>
    {
       data && data.map((item)=>{
        return <p key={item.id} className='child' >{item.title}</p>
       })
    }
    </>
  )
}

export default App
