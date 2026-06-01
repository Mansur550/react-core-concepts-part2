import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

function handleClick(){
  alert('Button Clicked')
}


  return (
    <>
    <h3>Vite +React</h3>

    {/* Event handeler */}
    <button onClick={handleClick} >Click Me</button>



    </>
  )
}

export default App
