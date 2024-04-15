/*
* Title:  
* @author: Saanvi Iyer
* @since 15-04-2024
*/

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Login  from "./pages/Login"
import  Signup  from "./pages/Signup"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </>
  )
}
export default App
