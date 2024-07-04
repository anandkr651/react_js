import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Footer } from './component'
import { Outlet } from 'react-router-dom'
import {Header} from './component'

function App() {
  const [loading ,setLoading] = useState(true)
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
        <Header/>
        <main >
         todo: <Outlet /> 
          </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
