import { useState } from "react";
import React from "react";

function ChangeColor() {
  const [color, setColor] = useState("black");

  return (
    <>
      <p style={{ color }}>색상 바꾸기</p>
      <div>
        <button onClick={() => setColor("red")}>빨간색</button>
        <button onClick={() => setColor("blue")}>파란색</button>
        <button onClick={() => setColor("green")}>초록색</button>
      </div>
    </>
  );
}

export default ChangeColor;
