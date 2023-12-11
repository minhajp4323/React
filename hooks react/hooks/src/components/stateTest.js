import React, {useState} from "react";

const Handler=()=>{
    const initialValue= 0
    const[count, setCount]= useState(initialValue)
    const plus=()=>{
        setCount(count+1)
    }
    const minus=()=>{
        if(count>0){
            setCount(count-1)
        }
        if(count==0){
            alert("Minimus count is Zero")
        }
    }
    const reset=()=>{
        setCount(initialValue)
    }


    return(
        <div>
            <h3>{count}</h3>
            <button onClick={plus}>increase</button>
            <button onClick={minus}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}


export default Handler