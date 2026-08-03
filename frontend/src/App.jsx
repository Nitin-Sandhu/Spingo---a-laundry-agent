import "./App.css"
import { Routes ,Route ,Link } from "react-router-dom"
import React from 'react'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Siqnup from "./pages/Signup"

const App = () => {
  return (
    <div  >
        
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/signup" element={< Siqnup />} />
          </Routes>
          
        
    </div>
  )
}

export default App