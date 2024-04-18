import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Appbar'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-container">
      <Appbar />
    </div>
    <div className="student-container">
      <Student/>
    </div>
    
    </>
  )
}

export default App
