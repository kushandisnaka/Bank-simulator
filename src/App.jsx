import { useState } from "react"
import First from "./Components/Mychannel/first"
import Login from "./Components/Pages/Login"
import Signup from "./components/pages/Signup"
import Home from "./Components/Pages/Home"
import Deposit from "./Components/Pages/Deposit"



import {BrowserRouter, Route, Routes} from 'react-router'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<First/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/deposite" element={<Deposit/>} />

    </Routes>
  </BrowserRouter>
    
    
    </>
  )
}

export default App
