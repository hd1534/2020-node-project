import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      throw new Error("Unhandled action");
  }
}

function reducer2(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function ReducerSample() {
  // useReducer(func, defaltValue)
  const [count, dispatchCount] = useReducer(reducer, 0);
  const [number, dispatchNumber] = useReducer(reducer2, 0);

  return (
    <>
      <div>
        <p>You cliked {count} times</p>
        <button onClick={() => dispatchCount({ type: "ADD" })}>Clik me</button>
      </div>
      <div>
        <h1>{number}</h1>
        <button onClick={() => dispatchNumber({ type: "PLUS" })}>+</button>
        <button onClick={() => dispatchNumber({ type: "MINUS" })}>-</button>
      </div>
    </>
  );
}

export default ReducerSample;
