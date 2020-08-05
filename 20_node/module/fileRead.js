var fs = require("fs");

// 동기식
try {
    var data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data);
} catch (exception) {
    console.error('동기식 Error : ' + exception);
    return;
}

console.log('동기식 읽기 완료');

// 비동기식
fs.readFile('hello.txt', 'utf8', function(err, data) {
    if(err) {
        console.error('비동기식 Error : ' + err);
    } else {
        console.log(data);
    }
});

console.log('비동기식 읽기 완료');