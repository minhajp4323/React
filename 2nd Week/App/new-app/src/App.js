import React from "react";
// import Counter from "./Components/UseReducer";
// import ComponentD from "./Components/context api/componentD";
import "./App.css";
// import CustomHooks f/rom "./Components/CustomHooks";
// import CustomHooksTwo from "./Components/CustomHooksTwo";
import ComponentA from "./Components/context api/ComponentA";
import ParentOne from "./Components/memo/parentOne";


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Minhaj"}>
        <ChannelContext.Provider value={"Bridgeon"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CustomHooks />
      <CustomHooksTwo /> */}
      <ParentOne />
    </div>
  );
}

export default App;
