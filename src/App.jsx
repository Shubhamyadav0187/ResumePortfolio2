import { useState } from 'react'
import ProfileCard from './ProfileCard.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard/>
    </>
  )
}

export default App
