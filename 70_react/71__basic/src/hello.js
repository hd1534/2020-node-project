import React from "react";

// const props = {name: "이름", color="blue"};
// function Hello(props) {
//   return <div style={{ color: props.color }}>Hello, {props.name}</div>;
// }

function Hello({ name = "이름없음", color = "black", children, isLoggedIn }) {
  // name = "data" 이렇게 default로 쓸 수 있다.
  return (
    <>
      <div style={{ color }}>
        Hello, {name}
        {children /*children은 태그 안에 있는 내용을 나타냄 */}
      </div>
      <div>{isLoggedIn ? "로그인 되었습니다." : "로그인을 해주세요"}</div>
      <div>{isLoggedIn && "로그인 되었습니다.2"}</div>
      <div>{isLoggedIn || "로그인을 해주세요2"}</div>
    </> // 위의 논리 연산이 작동하는 이유는 or일 경우 앞이 참이면 굳이 뒤를 확인하지 않고 거짓일 때만 뒤의 값을 확인한다. (사실 c같은건 리턴값이 있는 함수여야 저게 되는데 js나 파이썬은 값을 리턴해 주더라 사실 잘모르겠다.)
  );
}

// default 가 없으면 그냥 없이 나오고 에러는 나지 않는다.
// default Props
// Hello.defaultProps = {
//   name: "이름없음",
//   color: "black",
// };
export default Hello;
// export default 는 하나의 파일이 하나만 리턴 할 수 있다.
