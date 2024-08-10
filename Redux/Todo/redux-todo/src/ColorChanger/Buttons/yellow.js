import React from 'react'
import { changeColor } from '../ColorSlice';
import { useDispatch } from 'react-redux';


function Yellow() {
    const dispatch= useDispatch()
    const handleColorChange = (color) => {
        dispatch(changeColor(color));
      };
  return (
    <div style={{width:"10px"}}>
      <button onClick={handleColorChange("yellow")}>Yellow</button>
    </div>
  )
}   

export default Yellow