import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
       
        setCounterOne(prev=>prev+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(prev=>prev+1)
    }

    const isEven= useMemo(()=>{
         for (let index = 0; index < 3000000000; index++) {
           
            
        }
        return counterOne % 2 ===0
    },[counterOne]) 

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
           {isEven ?(<h3 style={{display:'inline'}}>Even</h3>):(<h3 style={{display:'inline'}}>Odd</h3>)} 
        </div>
        <div className='gap'>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter