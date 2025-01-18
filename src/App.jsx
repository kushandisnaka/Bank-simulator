import React from "react"
import First from "./Components/Mychannel/first"
import Login from "./Components/Pages/Login"
import Signup from "./components/pages/Signup"
import Home from "./Components/Pages/Home"
import Bill_payment from "./Components/Pages/Bill_payment"
import About from "./Components/Pages/About"


import {BrowserRouter, Route, Routes} from 'react-router'


function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<First/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/bill_payment" element={<Bill_payment/>} />
       <Route path="/about" element={<About/>} /> 


    </Routes>
  </BrowserRouter>
    
    
    </>
  )
}

export default App
