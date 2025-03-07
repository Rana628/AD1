import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitalArtCourse from './DigitalArtCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DigitalArtCourse/> 
    </>
  )
}

export default App
