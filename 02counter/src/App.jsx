import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter < 20){
      // counter = counter + 1
      setCounter(counter + 1)  
    } else {
      alert("Counter cannot exceed 20!")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)  
    } else {
      alert("Counter cannot go below 0!");
    }
  };
  
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2> 

    <button 
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
