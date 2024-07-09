import { useState,useEffect } from 'react'
import Card from './component/Card'
import Theme from './component/Theme'
import { ThemeProvider } from './context/Theme'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode =()=>{
    setThemeMode("light")
  }
  const darkMode =()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
      <div>
        <Theme />
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
