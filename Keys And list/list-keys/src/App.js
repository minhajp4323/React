import "./App.css";
import Keys from "./components/keys/keys";
import Header from "./components/keys/events";
import FetchEvent from "./components/keys/fetcheEent";
import Context from "./components/keys/Context";
import { createContext } from "react";
import Main from "./components/keys/Main";
import { Route, Routes } from "react-router-dom";
import Home from "./components/keys/Home";

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <Keys />
      <Header />
      <FetchEvent /> */}
      <UserContext.Provider value={"Minhaj"}>
        <Context />
      </UserContext.Provider>
      {/* <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/home" element={< Home/> } />
      </Routes> */}
    </div>
  );
}

export default App;
