import React, { useEffect, useState } from 'react'

const HookCounterOne = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    const handleIncrement=()=>{
        setCount(prev=>prev+1)
    }
    useEffect(()=>{
        console.log('effect block runs')
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div className='gap'>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={handleIncrement}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne