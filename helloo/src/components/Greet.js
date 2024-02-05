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
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {profile.map((item) => (
          <tr>
            <td>{item.name} </td>
            <td>{item.age} </td>
          </tr>
        ))}
      </tbody>
      {profile.map((x)=>(

        <ul>
          <li>{x.name}  {x.age} </li>
        </ul>
      ))}
    </div>
  );
}

export default Greet;
