// import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='text-center font-semibold '>
      user : {userid}
    </div>
  )
}

export default User
