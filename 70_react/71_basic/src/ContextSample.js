import React, { createContext, useContext } from "react";

// 1. Context 생성하기
const MyContext = createContext("포테이토");

/*

function Child({text}) {
  return <div>안녕하세요, {text}</div>;
}

function Parent({text}) {
  return <Child text={text} />;
}

function GrandParent({text}) {
  return <Parent text={text} />;
}

function ContextSample() {
  return <GrandParent text="감자" />;
}
*/

function Child() {
  // 3. useContext로 값 가져오기
  const text = useContext(MyContext);
  return <div>안녕하세요, {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  return (
    <MyContext.Provider value={"감자"}>
      <GrandParent text="감자" />
    </MyContext.Provider>
  );
}

export default ContextSample;
