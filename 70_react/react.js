// 1. Spread 연산자 (ES6, 전개 연산자)
//  배열
console.log("\n1-배열\n");
const num = [1, 2, 3, 4, 5];
console.log(num);
console.log(...num);
console.log([...num]);
console.log([...num, 6]);

[a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, rest);

//  객체
console.log("\n1-객체\n");
const std = { id: 1, name: "홍길동" };
const std2 = { addr: "연산", phone: "010-1234-5678" };
const std3 = { ...std, ...std2 };
console.log(std3);

// 2. 비구조화 할당 (구조 분해 할당)
// 배열
console.log("\n2-배열\n");
const arr = [1, 2, 3];
const [one, two, three] = arr;

console.log(one, two, three);

//  객체
console.log("\n2-객체\n");
const obj = {
  id: 1,
  text: "hello",
};

const { id, text } = obj; // const id = obj.id, text = obj.text;

console.log(id, text);

const arrobj = [
  { id: 1, text: "hello" },
  { id: 2, text: "hi" },
  { id: 3, text: "bye" },
];

const [{ text: first }, { text: second }, { text: third }] = arrobj;
console.log(first, second, third);

let c = 1,
  d = 2;
[c, d] = [d, c];
console.log(c, d);

// 3. 불변성 유지
//  객체
console.log("\n3-객체\n");
const object = {
  a: 1,
  b: 2,
};

object.b = 3; // (x) -> 불변성 깨짐. 즉, 리엑트에서 리 랜더링이 시작됨

const newObjet = {
  ...object, // 기존값을 집어넣고
  b: 5, // 새로운 값으로 덮어씀
}; // (o) -> 불변성 유지

console.log(newObjet);

//  배열
console.log("\n3-배열\n");

todo = [
  {
    id: 1,
    text: "점심밥 먹기",
    done: false,
  },
  {
    id: 2,
    text: "공부하기",
    done: false,
  },
];
/*  불변성이 깨지는 나쁜 예
todo.push({ // 추가
  id: 3,
  text: "저녁밥 먹기",
  done: false,
});
todo.splice(0, 1); // 삭제
selected = todo.find((item) => item.id === 3); // 수정
selected.done = !selected.done; // 수정
*/

const inserted = todo.concat({
  // 추가
  id: 3,
  text: "저녁밥 먹기",
  done: false,
});

const filtered = inserted.filter((item) => item.id !== 2); // 삭제

const toggled = filtered.map((item) =>
  item.id === 3 ? { ...item, done: !item.done } : item
); // 수정

console.log("todo: \n", todo);
console.log("inserted: \n", inserted);
console.log("filtered: \n", filtered);
console.log("toggled: \n", toggled);

// 4. 라이브러리 가져오기

// node.js : require 는 CommonJS에 정의
// const moment = require("moment");

// react : ES6(ES2015)에서 새로 도입된 키워드
// import moment from "moment";

// 내보내기
// node.js
// module.exports = {};

// react
// export default 컴포넌트명;
