import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Data from './component/data.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={Data}/>
  </React.StrictMode>,
)
