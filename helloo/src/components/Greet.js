import React from "react";

function Greet() {
  const profile = [
    { name: "Minhaj", age: 24 },
    { name: "Nusaif", age: 22 },
    { name: "Jishmal", age: 24 },
    { name: "Shibil", age: 22 },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {profile.map((item)=>(
          <tr>
            <td>{item.name} </td>
            <td>{item.age} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Greet;
