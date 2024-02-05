import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hello/> */}
        <Greet/>
        {/* <Welcome/> */}
        {/* <Counter /> */}
      </div>
    );
  }
}
export default App;
