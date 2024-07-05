import {useState} from 'react'

function App() {
  const [type, setType] = useState()
  const [color, setColor] = useState()
  
  function randomColor(length){
    return Math.floor(Math.random()*length)
  }
  function handleHexColor(){
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor ='#'
    for(let i=0;i<6;i++){
      hexColor += hex[randomColor(hex.length)]
    }
    setColor(hexColor)
  }
  function handleRGBColor(){
    const r=randomColor(256)
    const g=randomColor(256)
    const b=randomColor(256)
    setColor(`rgb(${r},${g},${b})`)
  }
  // useEffect(()=>{
  //  if(type==='rgb') randomColor()
  //   else randomColor()
  // },[type])
   
  return (
    <>
    <div style={{background:color}} className='w-full h-screen duration-200 text-center'>
        <button onClick={()=>setType('hex')}>Create Hex Color </button>
        <button onClick={()=>setType('rgb')} >Create RGB Color</button>
        <button onClick={type ==='hex' ? handleHexColor: handleRGBColor} >Create Random Color</button>
        <h1>{type==='hex'?"hex color":"rgb color"}</h1>
        <h1>{color}</h1>
    </div>
    </>
  )
}

export default App

