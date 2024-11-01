import { useState } from 'react'
import ProfileCard from './ProfileCard.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog.jsx"



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ProfileCard/>} />
    <Route path="/ProfileCard" element={<ProfileCard/>} />
    <Route path="/Blog" element={<Blog/>} />
    </Routes>
      
     
    </BrowserRouter>
  )
}

export default App
