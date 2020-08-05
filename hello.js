var a = '안';
var b = '녕';
var greet = a + b +  "하세요";
var greet2 = `${a}${b}하세요`;  // 템플릿 문자열,  백틱(`) 사용,  ES6 문법

console.log (greet);
console.log (greet2);


// ES5
var func = function() {
    //do something
    console.log("func")
}
func();

// ES6
var func2 = () => {
    //do something
    console.log("func2")
}
func2();

// ES6
var func3 = () => /*do someting*/ console.log("func3");
func3();

// ES6 익명 함수
(()=>/*do something*/ console.log("func4")) ();

// ES6 익명 함수
( a => /*do somethin*/ console.log(a))("???");
// ES6 익명 함수
( (a, b) => /*do somethin*/ console.log(`${a} 와 ${b}`))("a", "b");