import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onReset = () => {
    setText("");
  };
  const onChange = (event) => {
    // console.log(event.target); // event target check
    setText(event.target.value);
  };

  return (
    <>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>값 : {text}</div>
    </>
  );
}

export default InputSample;
