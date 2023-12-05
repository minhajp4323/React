import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateTutorial from './components/useState';
import { Tutorial } from './components/useState';
import Products from './components/props';

import { Button } from "react-bootstrap";

function App() {
  return (
    <>
    <Button>click</Button>
      <h2>UseStates</h2>
      <StateTutorial />
  
      <br></br>
      <Tutorial />
      <h1>Props</h1>
      {/* <Products 
        name= 'Amazone echo' 
        description = 'your AI Assistance' 
        image ='https://picsum.photos/id/237/200/300'
        price= {59.99}
     /> */}
    

    </>
  );
}

export default App;
