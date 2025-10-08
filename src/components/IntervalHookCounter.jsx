import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
    const [count,setCount]=useState(0)
    const[displayCount,setDisplayCount]=useState(true)

    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
        console.log("interval Counter")
        const interval=setInterval(tick,1000)
        return ()=>{
            console.log("unmounting interval Counter")
            clearInterval(interval)
        }
    },[])
  return (
    <div className='gap'>
        <button onClick={()=>setDisplayCount(!displayCount)}>Toggle Interval Counter</button>
        {displayCount&&<h2>{count}</h2> }
    </div>
  )
}

export default IntervalHookCounter