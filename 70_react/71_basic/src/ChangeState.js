import { useState } from "react";
import React from "react";

function ChangeState() {
  const [number, setNumber] = useState(1);
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { id: number, value: number }]);
    setNumber((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={addItem}>add Item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </>
  );
}

export default ChangeState;
