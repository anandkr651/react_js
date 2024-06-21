import { useState } from 'react'

function App() {
  const [text, setText] = useState('hello')

  function handleChange(e){
    setText(e.target.value)
  }

  return (
    <>
   <div className='box'>
   <input value={text} onChange={handleChange} className='bg-white text-black my-3 px-3'/>
    <p>you types : {text}</p>
    <button onClick={()=> setText('hello')} className='my-3'>Reset</button> <br />
   </div>
    </>
  )
}

export default App
