import React from "react";

function Greet() {
  const profile = [
    { name: "Minhaj", age: 24 },
    { name: "Nusaif", age: 22 },
    { name: "Jishmal", age: 24 },
    { name: "Shibil", age: 22 },
  ];
  const inputHandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={inputHandle} />
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {profile.map((item)=>{
          <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        })}
      </table>
      
    </div>
  );
}

export default Greet;
