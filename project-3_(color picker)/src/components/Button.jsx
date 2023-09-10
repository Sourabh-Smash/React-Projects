// import React, { useState } from 'react'

const Button = ({ colorVal, setColor }) => {
    // let colorVal = color;
    // const [color, setColor] = useState();
    console.log(colorVal,setColor);
  return (
    <button
      onClick={() => setColor(colorVal)}
      className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
      style={{ backgroundColor: colorVal }}
      >{colorVal}</button>
  );
}

export default Button;