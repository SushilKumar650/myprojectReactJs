import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter] = useState(15) 
  
  
  /* counter is variable and [setCounter ] is responsible for to update
   counter variable.  it's not neccesery to set name as setCounter also give any name like. sunnyCounter [use Camelcase]*/

//let counter = 15

const addvalue = () => {
  // console.log("Value Added",Math.random());
  
  // counter = counter + 1 ;
  // setCounter(counter)
  if(counter < 20 ){
    setCounter(counter +1 )
  }
 
   /* there is a case where dupilcate the code and asked to whats the result. setCounter gives a callback function
    where we can use prevCounter as exciting previous value and add + 1 .*/
  // setCounter(prevCounter => prevCounter +1)
  // setCounter(prevCounter => prevCounter +1)
  // setCounter(prevCounter => prevCounter +1)
  // setCounter(prevCounter => prevCounter +1)

  }
  
  const removevalue = () => {
    if( counter > 10){
      setCounter(counter - 1)
     
    }
  
  }
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value : {counter} </h2>

     <button
     onClick={addvalue}>Add Value {counter} </button>
     <br/>
     <button
     onClick={removevalue}>Remove Value {counter} </button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
