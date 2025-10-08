import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialState=0
    const[count,setCount]=useState(initialState)

    const incrementFive=()=>{
        for(let i=1;i<=5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }

  return (
    <div>
        <h3>Count:{count}</h3>
        <button onClick={()=> setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={()=>setCount(initialState)}>Reset</button>
        <button onClick={()=> setCount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={incrementFive}>IncrementByFive</button>
    </div>
  )
}

export default HookCounterTwo