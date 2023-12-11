import React, {useState}  from "react";
import { useEffect } from "react";
import './useState.css'


const StateTutorial = ()=>{
  const initial= 0;
  const [counter, setCounter] = useState(initial);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data)=>data.json())
    .then((result)=>console.log(result))
  },[])


  let increment=()=>{
    setCounter(counter+1)
  }
  let decrement=()=>{
    setCounter(counter-1)
  }
  let addFive =()=>{
    setCounter(prevCount=>prevCount-5)
    setCounter(prevCount=>prevCount+
      5)
  }
  return(
  <div className="main"><br></br>
  <button className="btn1" onClick={increment}>Increment</button> <br>
</br>
{counter}<br>
</br>
  <button className="btn2" onClick={decrement}>decrement</button>
  <button className="btn2" onClick={()=>setCounter(initial)}>reset</button>
  <button className="btn2" onClick={addFive}>add +5+5</button>
   </div>
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
console.log("minhaj");