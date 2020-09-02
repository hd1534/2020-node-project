import React from "react";
import Hello from "./hello";
import Hello2 from "./hello2";
import "./App.css";

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
  const name = "react";
  const style = {
    backgroundColor: "yellow", // background-color
    color: "blue",
    fontSize: 30, // font-size
  };
  return (
    // fragment
    </* 주석 */>
      {/*주석*/}
      // 주석 아님
      {alert("hi?")}
      <div style={style}>{name}</div>
      <div className="box"></div>
      <Hello
        // props
        name="이름"
        color="blue"
        isLoggedIn={true}
      />
      <Hello>
        <br />
        태그 안의 텍스트(children)입니다.
      </Hello>
      <br />
      <Hello2 id="3630" name="황재현" color="blue">
        황펭
      </Hello2>
      <Hello2 />
      <Hello2 messages={["메세지1", "메세지2", "메세지3"]} />
    </> // <a /> === <a></a>
  );
}

export default App;
