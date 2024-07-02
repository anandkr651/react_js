import  { createContext } from 'react'
import DataB from './DataB'

const data=createContext()
const mydata=createContext()

function DataA() {
    const name="Yoshita jain"
    const learning="react"
  return (
    <div>
      <data.Provider value={name}>
        <mydata.Provider value={learning}>
          <DataB />
        </mydata.Provider>
   </data.Provider>
    </div>
  )
}

export default DataA
export {data,mydata}
