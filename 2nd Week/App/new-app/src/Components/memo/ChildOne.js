import React, { useState } from "react";

export const ChildOne = () => {
  const [count, setCount] = useState(0);

  console.log("child rendered");
  return (
    <div>
      
      <button onClick={() => setCount((c) => c + 1)}>Count-{count} </button>
    </div>
  );
};

/////////
export const MemoizedChildOne = React.memo(ChildOne);
