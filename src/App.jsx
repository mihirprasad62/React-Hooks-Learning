import React from 'react'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'

const App = () => {
  return (
    <div>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
    </div>
  )
}

export default App