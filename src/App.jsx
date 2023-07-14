import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Api_connect from './component/Api_connect'
import Animal from './component/Animal'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Api_connect />
    <Animal />
     
    </>
  )
}

export default App
