import React, { useState } from "react";

// 컴포넌트 내의 동적인 값을 state라고 함
// Hook -> useState
function StateSample() {
  // [현재 state값, 업데이트하는 함수] = useState(초기값)
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("black");
  const [items, setItems] = useState([]);

  const addItem = () => {
    // items라는 배열에 {id: number, value: number} 추가
    setItems([...items, { id: items.length + 1, value: items.length }]);
  };

  return (
    <>
      <div>
        <p>You cliked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Clik me</button>
      </div>
      <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button onClick={() => setNumber((prev) => (prev = prev - 1))}>
          -
        </button>
      </div>
      <div>
        <p style={{ color }}>색상 바꾸기</p>
        <button onClick={() => setColor("red")}>빨간색</button>
        <button onClick={() => setColor("blue")}>파란색</button>
        <button onClick={() => setColor("yellow")}>노란색</button>
      </div>
      <br />
      <div>
        <button onClick={addItem}>add Item</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StateSample;
