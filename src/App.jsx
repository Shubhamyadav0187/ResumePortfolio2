import { useState } from 'react'
import Resume from './Resume.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog.jsx"
import Home from './Home.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    {/* <Route path="/" element={<ProfileCard/>} /> */}
    <Route path="/Resume" element={<Resume/>} />
    <Route path="/Blog" element={<Blog/>} />
    
    </Routes>
      
     
    </BrowserRouter>
  )
}

export default App
