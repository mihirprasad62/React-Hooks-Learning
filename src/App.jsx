import React from 'react'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'

const App = () => {
  return (
    <div>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <HookCounterOne/>
      <HookMouse/>
    </div>
  )
}

export default App