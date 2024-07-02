import { useContext } from 'react'
import {data,mydata} from './DataA'

function DataC() {
    const first=useContext(data)
    const last=useContext(mydata)
  return (
    <div>
      <p>in this {last} series we can learn by useContext Hook by {first}</p>
    </div>
  )
}

export default DataC
