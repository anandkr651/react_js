import { useState } from 'react'
import Circles from './component/Circle'
import Control from './component/Control'

const getRandomcolor=()=>{
  const hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  let hexColor='#'
  for(let i=0;i<6;i++){
    hexColor +=hex[Math.floor(Math.random()*hex.length)]
  }
  console.log(hexColor);
  return hexColor
}

function App() {
  const [randomCircle, setRandomCircle] = useState([])
  const [history,setHistory]=useState([])
  const [disable,setDisable]=useState(false)

const handleClick =(e)=>{
  setRandomCircle((prev)=>{
    return[
      ...prev,
      {
        x:e.clientX,
        y:e.clientY,
        id:Date.now(),
        bgColor:getRandomcolor()
      }
    ]
  })
}

const handleUndo =()=>{
  const copy=[...randomCircle]
  const lastCircle=copy.pop()
  setHistory((prev)=>[...prev,lastCircle])
  setRandomCircle(copy)
}
const handleRedo =()=>{
  const copy=[...history]
  const lastHistory=copy.pop()
  setRandomCircle((prev)=>[...prev,lastHistory])
  setHistory(copy)
}
const handleReset=()=>{
  setRandomCircle([])
  setHistory([])
}
console.log(randomCircle);
  return (
    <div className='board'
    onClick={handleClick}>
      {randomCircle.map((circle)=>(
        <div key={circle.id}>
          <Circles {...circle}/>
        </div>
      ))
      }
      <Control undo={handleUndo} redo={handleRedo} reset={handleReset} hasCircle={randomCircle.length>0} hasHistory={history.length>0}/>
    </div>
  )
}

export default App
