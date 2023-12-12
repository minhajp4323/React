import React,{useState, useEffect} from 'react'
import useDocumentTitle from './UseHooks/useDocumentTitle'

function CustomHooks() {
    const [count, setCount]= useState(0)
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase- {count}</button>
    </div>
  )
}

export default CustomHooks