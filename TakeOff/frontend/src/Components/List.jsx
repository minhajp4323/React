import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const [user, setUser] = useState();
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get("http://localhost:3000/get");
        console.log(response.data.data[0]);
        setUser(response.data.data[0]);
      };
      fetchUser();
    } catch (error) {
      console.log(error, "Error while fetching user");
    }
  }, []);
  return (
    <div>
      <table style={{ border: "1px solid black", padding: "10px" }}>
        <thead style={{ border: "1px solid black" }}>
          <th>Name</th>
          <th>Age</th>
        </thead>

        <tbody>
          {user.map((users, index) => (
            <tr key={index}>
              <td>{users.name}</td>
              <td>{users.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
