import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleCLick={incrementAge}>incrementAge</Button>
      <Count text="Salary" count={salary} />
      <Button handleCLick={incrementSalary}>incrementSalary</Button>
    </div>
  );
}

export default ParentComponent;
