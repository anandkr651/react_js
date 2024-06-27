import { useCallback, useState,useRef } from 'react'

function App() {
  const [color, setColor]=useState("blue")
  const changeref=useRef(null)


  const randomColor = useCallback (()=>{
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
      color +=hex[Math.floor(Math.random()*16)]
    }
    setColor(color)
  },[])

  const startchanging = useCallback(()=>{
    if(changeref.current===null)
      changeref.current=setInterval(randomColor,1000)
  },[randomColor])
  
  const stopchanging=useCallback(()=>{
    if(changeref.current !== null)
      clearInterval(changeref.current)
    changeref.current=null
  },[])

  
  return (
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
     <div className='fixed flex justify-center gap-5 bottom-11 inset-x-4'>
     <button onClick={startchanging} className='bg-slate-400 rounded-xl py-4 px-4 font-medium start'>start</button>
     <button onClick={stopchanging} className='bg-slate-400 rounded-xl py-4 px-4 font-medium stop '>stop</button>
     </div>
    </div>
    </>
  )
}

export default App
