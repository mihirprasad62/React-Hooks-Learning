import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter'

const CustomCounterOne = () => {
  const [count,decrement,reset,increment]=useCounter(0,1)
  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CustomCounterOne