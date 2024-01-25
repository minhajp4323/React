import logo from './logo.svg';
import './App.css';
import Hello, {  } from "./components/Hello";
import { Component } from 'react';
import Greet from './components/Greet';


class App extends Component{
  render(){
    return (
      <div className='App'>
        {/* <Hello/> */}
        <Greet />
      </div>
    )
  }
}
export default App;
