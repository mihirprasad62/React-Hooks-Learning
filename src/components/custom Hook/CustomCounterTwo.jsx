import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter'

const CustomCounterTwo = () => {
   const [count,decrement,reset,increment]=useCounter(10,10)
  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CustomCounterTwo