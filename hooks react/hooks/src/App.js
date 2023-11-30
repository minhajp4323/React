import React from 'react';
import './App.css';
import StateTutorial from './components/useState';
import { Tutorial } from './components/useState';
import Products from './components/props';

function App() {
  return (
    <>
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
