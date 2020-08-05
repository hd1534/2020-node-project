

function func () 
{
    console.log(a);
    let a = 10;  // let 은 블록 스코프  ES6 문법
}
function func2 () 
{
    console.log(a);
    var a = 10; // var 은 함수 스코프
}


func2 ()
func ()