import React, { useReducer } from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return state+action.value
        case 'decrement':
            return state-action.value
        case 'reset':
            return initialState
        default:
            return state
    }
}
const CounterThree = () => {
    const [countOne,dispatchOne]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <div className='gap'>
        <h2>{countOne}</h2>
        <button onClick={()=>dispatchOne({type:'decrement',value:5})}>Decrement</button>
        <button  onClick={()=>dispatchOne({type:'reset'})}>Reset</button>
        <button  onClick={()=>dispatchOne({type:'increment',value:5})}>Increment</button>
        <h2>{countTwo}</h2>
        <button  onClick={()=>dispatchTwo({type:'decrement',value:5})}>Decrement</button>
        <button  onClick={()=>dispatchOne({type:'reset'})}>Reset</button>
        <button onClick={()=>dispatchTwo({type:'increment',value:5})}>Increment</button>

    </div>
  )
}

export default CounterThree