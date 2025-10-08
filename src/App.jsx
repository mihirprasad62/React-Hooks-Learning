import React from 'react'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import HookMouseContainer from './components/HookMouseContainer'

const App = () => {
  return (
    <div>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <HookCounterOne/>
      {/* <HookMouse/> */}
      <HookMouseContainer/>
    </div>
  )
}

export default App