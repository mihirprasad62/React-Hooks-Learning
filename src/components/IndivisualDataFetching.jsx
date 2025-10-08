import axios from 'axios'
import React, { useEffect, useState } from 'react'

const IndivisualDataFetching = () => {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromBtnClick,setIdFromBtnClick]=useState(1)

    const handleClick=()=>{
        setIdFromBtnClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[idFromBtnClick])

  return (
    <div className='gap'>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button onClick={handleClick}>Click</button>
        <h2>{post.title}</h2>
    </div>
  )
}

export default IndivisualDataFetching