import React, {useState} from "react";

const Handler=()=>{ 
    const initialValue= 0
    
    const [count, setCount] = useState(initialValue)
    const plus=()=>{
        setCount(count+1)
    }
    const sub=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(initialValue)
    }
    return(
        <div>
         <h1>{count}</h1>
          <button onClick={plus}>+</button>
          <button onClick={sub}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
         
     )

}


export default Handler