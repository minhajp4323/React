import logo from './logo.svg';
import './App.css';
import React from 'react';


// jsx


function App() {
  const name = 'Minhaj'
  const a = 20;
  const b= 40;

  const message = ()=>{
    return "good morning";
  }
   return (
      <>
        <table>
          <Row />
          <Column />
        </table>
      </>
   );
   
  // return (
    
    // <div className="App">
    //   <h1 className='heading' id='dummyid'>Hello World</h1>
    //   <h2>My name is {name}</h2>
    //   <h2>{10+3}</h2>
    //   <h2>{a+b}</h2>
    //   <h2>{message()}</h2>
    // </div>

  // );
}

function Row() {
  return(
    <>
      <tr>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </>
  )
}
function Column() {
  return(
    <>
      <tr>
        <td>Minhaj</td>
        <td>Kerala</td>
      </tr>
    </>
  )
}

export default App;
