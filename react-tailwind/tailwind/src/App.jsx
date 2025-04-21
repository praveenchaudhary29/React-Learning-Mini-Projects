import React from "react"
import Component from "./components/components"
import { useState } from "react"
import { useEffect } from "react";
function App(){
  
  const [counter,setCounter] = useState(0);
  const [counter2,setCounter2] = useState(0);

  useEffect(()=>{
    console.log("Counter 1 is changing");  
  },[counter]);

  return (<div>
    <div>{counter}</div>
    <button onClick={(e)=>setCounter(counter+1)}>Increase Me</button>
    <button onClick={(e)=>setCounter(counter-1)}>Decrease Me</button>

    <div>{counter2}</div>
    <button onClick={(e)=>setCounter2(counter2+1)}>Increase Me</button>
    <button onClick={(e)=>setCounter2(counter2-1)}>Decrease Me</button>

  </div>
    
  )
}

export default App
