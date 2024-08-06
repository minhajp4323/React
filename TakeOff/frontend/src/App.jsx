import { Route, Routes } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import List from "./Components/List";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />}/>
          <Route path="/List" element={<List />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
