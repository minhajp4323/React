import React, { useRef } from "react";

function LocalStorage() {
  const data = useRef();
  const pass = useRef();

  const handleClick = () => {
    console.log(data.current.value, "is my Name" );
    console.log(pass.current.value, "is my Password" );
    localStorage.setItem("datas", data.current.value)
    localStorage.setItem("passs", pass.current.value)

  };
  console.log(localStorage.getItem("datas"));
  console.log(localStorage.getItem("passs"));
  return (
    <div>
      <input type="text" ref={data} />
      <br></br>

      <input type="password" ref={pass} />
      <br></br>
      
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default LocalStorage;
