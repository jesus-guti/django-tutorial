import React from "react"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Navbar from "./components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() { 
    return ( 
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;