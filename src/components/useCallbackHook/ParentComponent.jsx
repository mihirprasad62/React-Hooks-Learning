import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
    const [age,setAge]=useState(0)
    const [salary,setSalary]=useState(10)

    const incrementAge=useCallback(()=>{
        setAge(prev=>prev+1)
    },[age])
    const incrementSalary= useCallback(()=>{
        setSalary(prev=>prev+10)
    },[salary]) 
  return (
    <div>
        <Title/>
        <Count text='Age' count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text={'Salary'} count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent