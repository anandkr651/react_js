import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function Myapp(){
//   return(
//     <div>
//     <h1>custom app </h1>
//   </div>
//   )
// }

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https//google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }


// const anotherElement =(
//   <a href="https//google.com" target='_blank'>visite google</a>
// )

const user="chai aur react"
const ReactElement=React.createElement(
  'a',
  {href:'https//google.com',target:'_blank'},
  'click me ',
  user
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // <Myapp />
  // <ReactElement />
  // anotherElement
  ReactElement
)
