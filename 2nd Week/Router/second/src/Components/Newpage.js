import React from 'react'
import { useNavigate } from 'react-router-dom'

function Newpage() {
    const navigate= useNavigate()
  return (
    <div>
        <h1>Minhaj</h1>
        <button onClick={()=>navigate("/create")}>Back</button>
    </div>
  )
}

export default Newpage