import { useState } from 'react'
import QRCode from 'react-qr-code'

function App() {
  const [input,setInput] = useState('')
  const [qrcode,setQrcode]=useState("")

  function handleClick(){
    setQrcode(input)
    setInput("")
  }
  return (
    <>
    <div>

      <h1>QR Code Generator</h1>
      <input 
      type="text"
      placeholder='Enter Your Text'
      value={input}
      onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleClick} disabled={input && input.trim() !== ''? false :true}>Generate</button>
      
      </div>
      <QRCode id="qr-code-value" value={qrcode} size={400} />
    </>
  )
}

export default App
