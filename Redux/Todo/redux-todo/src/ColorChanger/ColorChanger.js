import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, resetColor } from "./ColorSlice";
import Yellow from "./Buttons/yellow";
import Blue from "./Buttons/blue";
import Green from "./Buttons/green";
import Red from "./Buttons/red";

const ColorChanger = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.color.color);

  const handleColorChange = (color) => {
    dispatch(changeColor(color));
  };
  const handleReset = () => {
    dispatch(resetColor());
  };

  return (
    <div>
      <div style={{ backgroundColor: currentColor, height: "200px" }}>
        <div  style={{ backgroundColor: currentColor, height: "180px" }}>
          <div  style={{ backgroundColor: currentColor, height: "160px" }}>
            <div  style={{ backgroundColor: currentColor, height: "140px" }}></div>
          </div>
        </div>
      </div>
      <div>
        <Yellow/>
        <Blue />
        <Green/>
        <Red/>
        <button onClick={() => handleColorChange("blue")}>Blue</button>
        <button onClick={() => handleColorChange("red")}>Red</button>
        <button onClick={() => handleColorChange("green")}>Green</button>
        <button onClick={() => handleColorChange("yellow")}>Yellow</button>
        <button onClick={() => handleReset("yellow")}>Reset</button>
      </div>
    </div>
  );
};

export default ColorChanger;
