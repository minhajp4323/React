import React, { useState } from "react";

const Header = () => {
  const clickHandle = () => {
    console.log("you clicked me");
  };
  const dbclickHandle = (name) => {
    alert("hello " + name);
  };
  const onChangeHandle = () => {
    console.log("you typed in the text field");
  };
  const onMouseOverHandle = () => {
    alert("you mouse over on the element");
  };
  const onKeyDownHandle = () => {
    alert("you pressed a key");
  };

  const[ms, setMs]= useState()
 const inputShow=(e)=>{
  console.log(e.target.value)
  setMs(e.target.value)
 }
// const Clickhhhhhh= (e)=>{
//   e.target.value
// }

  return (
    <>
    

<h1>{ms}</h1>
    <input placeholder="Type something....." type="text" onChange={inputShow}/>
    <button>Click</button>
      <h1>Learn React Events</h1>
      <button onClick={clickHandle} onDoubleClick={dbclickHandle}>
        Click Me
      </button>
      <h1 onDoubleClick={() => dbclickHandle("Jishmal")}>Double Click</h1>
      <input onChange={onChangeHandle} type="text" value="Minhaj"
       />
      <br />
      {/* <h1 onMouseOver={onMouseOverHandle}>Mouse Over</h1> */}
      <input onKeyDown={onKeyDownHandle} />
    </>
  );
};

export default Header;
