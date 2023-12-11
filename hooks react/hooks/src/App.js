import React from 'react';
import './App.css';

import StateTutorial from './components/useState';
import { Tutorial } from './components/useState';
import Products from './components/props';
import Handler from './components/stateTest';
import UseEffectTest from './components/UseEffectTest';





function App() {
  return (
    <>
    
      <h2>UseStates</h2>
      <Handler />

      <StateTutorial />
      <UseEffectTest />
  
      <br></br>
      <Tutorial />
      <h1>Props</h1>
      {/* <Products 
      name="Apple"
      description="Apple is a electronics brand"
      price = "1999"
      /> */}
    

    </>
  );
}

export default App;
