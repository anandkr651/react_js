import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/Auth'
import {login,logout} from './store/AuthSlice'
import { Footer } from './component/Index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading ,setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  return !loading ?(
    <div className='flex flex-wrap content-between'>
      <div className='w-full block'>
        <header/>
        <main >
         todo: {/* <Outlet /> */}
          </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
