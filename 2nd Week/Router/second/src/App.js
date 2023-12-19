import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CreateBlog from "./Components/CreateBlog";
import Posted from "./Components/Posted";
import Success from "./Components/Success";
import { createContext, useState } from "react";
import Display from "./Components/Display";

export const myContext = createContext();

function App() {
  const [blog, setBlog] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <myContext.Provider value={[blog, setBlog]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path="posted" element={<Posted />} />
          <Route path="succes" element={<Success />} />
          <Route path="display" element={<Display />} />
        </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
