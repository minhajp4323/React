import React from "react";

const Header= ()=>{
    const clickHandle=()=>{
        console.log("you clicked me")
    };
    const dbclickHandle=(name)=>{
        alert("hello " + name)
    };
    const onChangeHandle=()=>{
        console.log("you typed in the text field")
        
    };
    // const onMouseOverHandle=()=>{
    //     alert("you mouse over on the element")
        
    // };
    const onKeyDownHandle=()=>{
        alert("you pressed a key")
    }
    return(
        <>
        <h1>Learn React Events</h1>
        <button onClick={clickHandle} onDoubleClick={dbclickHandle}>Click Me</button>
        <h1 onDoubleClick={()=>dbclickHandle("Jishmal")}>Double Click</h1>
        <input onChange={onChangeHandle} type="text" />
        {/* <h1 onMouseOver={onMouseOverHandle}>Mouse Over</h1> */}
        <input onKeyDown={onKeyDownHandle} />
        

        </>
    )

}

export default Header;