import React, { useState } from 'react'
import HookMouse from './HookMouse'

const HookMouseContainer = () => {
    const [display,setDisplay]=useState(true)

  return (
    <div className='gap'>
        <button onClick={()=>setDisplay(!display)}>Toggle Hook Mouse Component</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default HookMouseContainer