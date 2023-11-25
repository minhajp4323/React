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
      <Products 
        name= 'Amazone echo' 
        description = 'your AI Assistance' 
        image ='https://picsum.photos/id/237/200/300'
        price= {59.99}
     />
     <Products 
        name= '15 Pro Max' 
        description = 'The best iPhone everr' 
        image ='https://picsum.photos/id/237/200/300'
        price= {1599}
     />
     <Products 
        name= 'MacBook Pro' 
        description = 'your Favourite computer' 
        price= {2599}
        image ='https://picsum.photos/id/237/200/300'
     />
  

    </>
  );
}

export default App;
