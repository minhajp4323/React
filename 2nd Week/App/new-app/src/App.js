import React, { createContext } from "react";
// import Counter from "./Components/UseReducer";
// import ComponentD from "./Components/context api/componentD";
import "./App.css";
import CustomHooks from "./Components/CustomHooks";
import CustomHooksTwo from "./Components/CustomHooksTwo";
import ComponentA from "./Components/context api/ComponentA";
import ParentOne from "./Components/memo/parentOne";
import Counter from "./Components/useMemo/Counter";
import ParentComponent from "./Components/UseCallback/ParentComponent";
import Title from "./Components/UseCallback/Title";
import LocalStorage from "./Components/Local storage/LocalStorage";
import { Routes, Route } from "react-router-dom";
import UseReducer from "./Components/UseReducer";
import FocusInput from "./Components/UseRef/FocusInput";

export const UserContext = createContext();
export const ChannelContext = createContext();
function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Minhaj"}>
        <ChannelContext.Provider value={"bridgeoon"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CustomHooks />
      <CustomHooksTwo /> */}
      {/* <ParentOne /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* <LocalStorage /> */}
      {/* <Routes>
        <Route path="/" element={<Counter /> }/>
        <Route path="/parent" element={<ParentOne /> } />
        <Route path="/parcomponent" element={<LocalStorage />} />

      </Routes> */}
      <UseReducer />
      <FocusInput />

    </div>
  );
}

export default App;
