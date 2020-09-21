import React, { useReducer } from "react";

const initialState = { id: "", name: "" };

function reducer(state, action) {
  switch (action.type) {
    case "changeId":
      return { ...state, id: action.value };
    case "changeName":
      return { ...state, name: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error("Unhandled action");
  }
}

function ReducerSample2() {
  const [student, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        name="id"
        placeholder="학번"
        onChange={(event) =>
          dispatch({ type: "changeId", value: event.target.value })
        }
        value={student.id}
      />
      <input
        name="name"
        placeholder="이름"
        onChange={(event) =>
          dispatch({ type: "changeName", value: event.target.value })
        }
        value={student.name}
      />
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
      <div>
        학번 : {student.id}, 이름 : {student.name}
      </div>
    </>
  );
}

export default ReducerSample2;
