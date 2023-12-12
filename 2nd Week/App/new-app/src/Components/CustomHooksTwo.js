import React,{useState, useEffect} from 'react'
import useDocumentTitle from './UseHooks/useDocumentTitle'

function CustomHooksTwo() {
    const [count, setCount]= useState(0)
    useEffect(()=>{
        document.title=`Count ${count}`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase- {count}</button>
    </div>
  )
}

export default CustomHooksTwo