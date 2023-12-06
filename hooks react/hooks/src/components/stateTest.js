import React, {useState} from "react";

const Handler=()=>{
    const initialCount=1
    const [count, setCount]= useState(initialCount)

    if(count==0){
        alert("Reached minimum Count")
    }

    
    const Add=()=>{
        setCount(count+1)
    }
    const sub =()=>{
        setCount(count-1)
    }
    const reset= ()=>{
        setCount(initialCount)
    }
    return(
        <>
        
        <button onClick={Add}>Increment</button>
        <p>{count}</p>
        <button onClick={sub}>Decrement</button>
        <button onClick={reset}>Reset</button>

        </>
    )
}

export default Handler