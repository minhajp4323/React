import React, { createElement, useRef, useState } from "react";

const Hello = () => {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    setCount(count + 1);
  };
  const [ vals , setVals ] = useState(null)
  const profile = [
    { id: 1, name: "Minhaj", age: 24 },
    { id: 2, name: "Nusaif", age: 22 },
    { id: 3, name: "Jishmal", age: 24 },
    { id: 4, name: "Shibil", age: 21 },
  ];
  let val
  const logto = (e) => {
    console.log(e.target.value);
  };
  const print = ()=>{
    console.log(val);
    setVals(val)
  }
  return (
    <>
      <div
        style={{
          backgroundColor: count <= 2 ? "red" : "blue",
          height: "100%",
        }}
      >

        <input type="text" onChange={logto} />
        {/* <button onClick={print}>click</button> */}
        {/* <h1>hello : {vals}</h1> */}

        <h3>{count}</h3>
        <button onClick={clickHandle}>Change color</button>
        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {profile.map((item) => (
          <ul key={item.id}>
            <li>{item.name} </li>
            <li>{item.age} </li>
          </ul>
        ))} */}
      </div>
    </>
  );
};

export default Hello;
