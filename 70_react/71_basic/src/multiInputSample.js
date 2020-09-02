import React, { useState } from "react";

function MultiInputSample() {
  const [student, setStudent] = useState({ id: "", name: "" });

  const onReset = () => {
    setStudent({ id: "", name: "" });
  };
  const onChangeId = (event) => {
    // console.log(event.target); // event target check
    setStudent({ ...student, id: event.target.value });
  };
  const onChangeName = (event) => {
    // console.log(event.target); // event target check
    setStudent({ ...student, name: event.target.value });
  };

  return (
    <>
      <input
        name="id"
        placeholder="학번"
        onChange={onChangeId}
        value={student.id}
      />
      <input
        name="name"
        placeholder="이름"
        onChange={onChangeName}
        value={student.name}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        학번 : {student.id}, 이름 : {student.name}
      </div>
    </>
  );
}

export default MultiInputSample;
