import React, { useState, useCallback } from 'react'
import './App.css';

function App() {
  var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
  const circleRadius = 30;
  const initialMousePos = { x: width / 2, y: height / 2};

  const [ mousePos, setMousePos ] = useState(initialMousePos); 

  const handleMouseMove = useCallback(event => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY});
  },[setMousePos]);

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle 
        cx={mousePos.x}
        cy={mousePos.y}
        r={circleRadius}
      />
    </svg>
  );
};

export default App;
