import React from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../ColorSlice';

function Blue() {
    const dispatch= useDispatch()
    const handleColorChange = (color) => {
        dispatch(changeColor(color));
      };
  return (
    <div style={{width:"10px"
    }}>
      <button onClick={handleColorChange("yellow")}>Blue</button>
    </div>
  )
}   

export default Blue
