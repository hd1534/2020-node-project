import React from "react";
import "./App.css";
import StateSample from "./stateSample";
import InputSample from "./inputSample";
import MultiInputSample from "./multiInputSample";

// 함수형 컴포넌트
// JSX를 리턴

// JSX 규칙
// 1. 2개 이상의 태그는 반드시 하나의 태그로 감싸주어야 한다.  (주로 <div></div>, <></> 를 쓴다. fragment)
// 2. 여는 태그와 닫는 태그가 항상 있어야 한다. (self-closing (<a />)을 사용해도 된다.)
// 3. JSX 안에서 javascript 값을 사용할 때에는 {} 를 사용한다
// 4. 인라인 style 작성 시 객체로 작성 (Camelcase)
// 5. css class 설정 시 class -> className
// 6. 주석 작성 {/* */}

function App() {
  return (
    <>
      <MultiInputSample />
      {/* <InputSample /> */}
      {/* <StateSample /> */}
    </>
  );
}

export default App;
