//미들웨어

const express = require('express');
const app = express();
const port = 3000;
const moment = require('moment');


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => res.send('Hello World22222!')) // 위에서 이미 이 메소드와 url이 처리되었기 때문에 여기까지 실행되지 않는다.

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.use('/test', (req, res, next) => {
    console.log("첫번째 미들웨어");
    next();
})
app.use('/hi', (req, res, next) => {
    console.log("두번째 미들웨어");
    next();
})
app.use((req, res, next) => {
    console.log("세번째 미들웨어");
    next();
})
app.use('/test', (req, res, next) => {
    console.log("네번째 미들웨어");
    next();
})

app.get('/test', (req, res) => res.send('미들웨어 테스트'))

// 127.0.0.1:3000/ 으로 요청할경우
//      첫번째 get만 실행되고 다음 get은 실행되지 않는다.
//      또한 미들웨어들이 실행되지 않는다.

// 127.0.0.1:3000/test 로 요청할 경우
//      첫번째, 세번째, 네번째 가 콘솔로 출력된다.

// 127.0.0.1:3000/hi 로 요청할 경우
//      두번째, 세번째가 출력이 된다.

// 이를 통해서 알 수 있는것
// 만약 함수 자체가 맞지 않는 url일경우 다음 함수로 넘기게 코딩되어 있는 경우 next는 말 그대로 다음 함수로 넘기는 거고,
// 만약 그렇지 않다면 다음함수 자체를 가리키는것이 아니라 그냥 실행하도록 하는건가 보다?
// 모르겟다 아마도 전잗일것 같다

// 플라스크 할때의 경험을 미루어보면, 플라스크는 처음 실행시 실행과 설정 관련 함수들을 먼저 실행시킨뒤, 
// 다른 함수들을 이벤트 리스너? 에다가 넣어놓고, 이벤트가 발생할때 이를 실행하는걸로 아는데
// 이거처럼 노드도 이벤트 리스너에 이 함수들을 넣어놓을 텐데 이에 접근을 순차적으로 url을 비교하면서 하는것 같다.
// 살짝 switch case 문처럼 동작하는것 같다. next() 가없으면 break; next()가 있으면 break없이

// 만약 send를 통해서 값을 전달한 다음에는 next()가 정상적으로 작동하지만 이후에 send등을 한번더 쓰려고하면 이미 값을 전달한 뒤에는
// 헤더를 작성할 수 없다고 에러가 난다.







// 로깅 미들웨어
const logger = (req, res, next) => {
    const {method, url} = req;
    const time = moment().format("YYYY-MM-DD HH:mm:ss:SSS");
    console.log(`${method} - ${url} - ${time}`);
    next();  // 이게 없으면 망한다. 
}








// 1. 애플리케이션 레벨 미들웨어  (실행 순서가 중요하다)
app.use(logger);


// 2. 라우터 레벨의 미들웨어


// 3. 내장(기본제공) 미들웨어
app.use(express.static("dir_address"));

// 4. 써드 파티 미들웨어
const bodyPareser = require("body-parser");
app.use(bodyPareser.json());

// 5. 오류처리 미들웨어

app.use((err, req, res, next) => {    
    res.status(err.code || 500);
    res.send(err.message, "Internal Server Error");
})