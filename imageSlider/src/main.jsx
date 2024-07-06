import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/>
  </React.StrictMode>
)
