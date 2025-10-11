import React, { useState } from 'react'

const useCounter = (initialCount=0,value) => {
    const [count,setCount]=useState(initialCount)
    const decrement=()=>{
        setCount(prev=>prev-value)
    }
    const increment=()=>{
        setCount(prev=>prev+value)
    }
    const reset=()=>{
        setCount(initialCount)
    }
    return [count,decrement,reset,increment]
}

export default useCounter