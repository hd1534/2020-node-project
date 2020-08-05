function add(a,b) {
    return a + b;
}

function print(result) {
    console.log(result);
}

function add2(a, b, callback) {
    callback(a + b)
}


// 동기식
print (add(1, 2));


// 비동기식
add2 (1, 2, result => console.log(result));  // 화살표 함수

