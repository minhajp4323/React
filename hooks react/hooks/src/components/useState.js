import React, {useState} from "react";

const StateTutorial = ()=>{
  const [counter, setCounter] = useState(2);

  let increment=()=>{
    
    setCounter(counter+1)
  }
  return(
  <div className="main">{counter}
  <button onClick={increment}>Increment</button> </div>
  )
};

export default StateTutorial

// useState 2nd example

export const Tutorial =()=>{
  const [inputValue, setInputValue]= useState("Minhaj");
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