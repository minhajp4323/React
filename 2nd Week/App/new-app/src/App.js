import React from "react";
// import Counter from "./Components/UseReducer";
import ComponentD from "./Components/context api/componentD";
import "./App.css";
import CustomHooks from "./Components/CustomHooks";
import CustomHooksTwo from "./Components/CustomHooksTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Minhaj"}>
        <ChannelContext.Provider value={"bridgeon"}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <CustomHooks />
      <CustomHooksTwo />

    </div>
  );
}

export default App;
