import logo from './logo.svg';
import './App.css';
import Hello, {  } from "./components/Hello";
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';


class App extends Component{
  render(){
    return (
      <div className='App'>
        {/* <Hello/> */}
        <Greet />
        <Welcome />
        <Counter />
      </div>
    )
  }
}
export default App;
