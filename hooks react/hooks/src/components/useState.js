import React, {useState} from "react";
import './useState.css'

const StateTutorial = ()=>{
  const [counter, setCounter] = useState(2);

  let increment=()=>{
    
    setCounter(counter+1)

  }
  let decrement=()=>{
    setCounter(counter-1)
  }
  return(
  <div className="main"><br></br>
  <button className="btn1" onClick={increment}>Increment</button> <br>
</br>
{counter}<br>
</br>
  <button className="btn2" onClick={decrement}>decrement</button> </div>
  )
};

export default StateTutorial





// useState 2nd example

export const Tutorial =()=>{
  const [inputValue, setInputValue]= useState(" ");
  let onChange = (event)=>{
    const newValue= event.target.value;
    setInputValue(newValue)
  }

  return(
    <div>
      <input placeholder="Enter something..." onChange={onChange} />
      {inputValue}
    </div>
  )
}