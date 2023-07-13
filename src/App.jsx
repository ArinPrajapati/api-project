import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Api_connect from './component/Api_connect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Api_connect />
     
    </>
  )
}

export default App
