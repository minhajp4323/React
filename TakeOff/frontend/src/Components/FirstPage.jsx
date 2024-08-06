import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/add");
      console.log("Form Submitted", response.data);
      alert("Submitted");
    } catch (error) {
      console.log(error, "Error whilw adding");
    }
  };
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center ",
      }}
    >
      <form type={handleSubmit}>
        <TextField
          label="Enter Name"
          variant="outlined"
          name="name"
          fullWidth
          onChange={handleChange}
          value={formData.name}
        />
        <TextField
          label="Enter Age"
          variant="outlined"
          name="age"
          fullWidth
          onChange={handleChange}
          value={formData.age}
        />

        <Button
          style={{ border: "2px solid black" }}
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          style={{ border: "2px solid black" }}
          onClick={() => navigate("/List")}
        >
          List
        </Button>
      </form>
    </div>
  );
}

export default FirstPage;
