import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const [user, setUser] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get");
        console.log(response.data.data[0]);
        setUser(response.data.data);
      } catch (error) {
        console.log(error, "Error while fetching user");
      }
    };
    fetchUser();
    const delUSer=  async ()=>{
      try {
        const response= await axios.delete(`http://localhost:3000/delete/${id}`)
      } catch (error) {
        
      }
    }
  }, []);

  return (
    <div>
      <table style={{ border: "1px solid black", padding: "10px" }}>
        <thead style={{ border: "1px solid black" }}>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, index) => (
            <tr key={index}>
              <td>{users.name}</td>
              <td>{users.age}</td>
              <button>delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
