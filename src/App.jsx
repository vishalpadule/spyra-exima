import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
        <Navbar />
        <Footer />
        <Home/>
    </>
  )
}

export default App
