import React, {useState} from "react";

const StateTutorial = ()=>{
  const [counter, setCounter] = useState(2);

  let increment=()=>{
    
    setCounter(counter+1)

  }
  let decrement=()=>{
    setCounter(counter-1)
  }
  return(
  <div className="main">{counter}<br></br>
  <button onClick={increment}>Increment</button> <br>
</br>
  <button onClick={decrement}>decrement</button> </div>
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