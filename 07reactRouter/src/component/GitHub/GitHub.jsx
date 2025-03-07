import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData()
  return (
    <div className='bg-gray-600 p-4 text-3xl text-white flex flex-col justify-center items-center'>
      GitHub followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-2xl my-2'/>
    </div>
  )
}

export default GitHub

export const githuninfoloader =async ()=>{
    const response=await fetch('https://api.github.com/users/anandkr651')
    return response.json()
}

//OR

// import { useState,useEffect } from 'react'
// function GitHub() {
//       const [data,setData] = useState([])
//     useEffect(()=>{
//       fetch('https://api.github.com/users/anandkr651')
//       .then((res)=>res.json())
//       .then((data)=>{
//           console.log(data);
//           setData(data)
//       })
//     },[])
//     return (
//       <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>
//         GitHub followers: {data.followers}
//         <img src={data.avatar_url} alt="Git picture" width={300}/>
//       </div>
//     )
//   }
//   export default GitHub

