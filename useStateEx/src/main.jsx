import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Mycheckbox from './component/index1'
import Form from './component/index2'
import FormObject from'./Object&ArraysInState/index1'
import Car from './Object&ArraysInState/index2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <Mycheckbox />
    <Form />
    <FormObject />
    <Car />
    </>
  </React.StrictMode>,
)
