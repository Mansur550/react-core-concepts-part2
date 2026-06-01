import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

function handleClick(){
  alert('Button Clicked')
}

const handleClick2 = () =>{
  alert('Button Clicked 2')
}

const handleClick3 = (num) =>{
  const newNum = num * 2;
  alert(newNum);
}


  return (
    <>
    <h3>Vite +React</h3>

    {/* Event handeler */}
    <button onClick={handleClick} >Click Me</button>
    <button onClick={handleClick2} >Click Me</button>
    <button onClick={() => handleClick3(10)} >Click Me</button>



    </>
  )
}

export default App
