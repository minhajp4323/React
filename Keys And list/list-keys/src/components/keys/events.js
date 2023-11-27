import React from "react";

const Header= ()=>{
    const clickHandle=()=>{
        console.log("you clicked me")
    };
    const dbclickHandle=(name)=>{
        alert("hello " + name)
    };
    return(
        <>
        <h1>Learn React Events</h1>
        <button onClick={clickHandle} onDoubleClick={dbclickHandle}>Click Me</button>
        <h1 onDoubleClick={()=>dbclickHandle("rahul")}>Double Click</h1>
        <input type="text" />
        </>
    )

}

export default Header;