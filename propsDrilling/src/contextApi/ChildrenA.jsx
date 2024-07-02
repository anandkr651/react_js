// import  { createContext } from 'react'
// import ChildrenB from './ChildrenB'

// const data=createContext()
// function ChildrenA() {
//     const name="Yoshita jain"
//   return (
//    <data.Provider value={name}>
//     <ChildrenB />
//    </data.Provider>
//   )
// }

// export default ChildrenA
// export  {data}


//Problem of nesting
import  { createContext } from 'react'
import ChildrenB from './ChildrenB'

const data=createContext()
const mydata=createContext()

function ChildrenA() {
    const name="Yoshita jain"
    const learning="react"
  return (
   <data.Provider value={name}>
        <mydata.Provider value={learning}>
          <ChildrenB />
        </mydata.Provider>
   </data.Provider>
  )
}

export default ChildrenA
export {data,mydata}
