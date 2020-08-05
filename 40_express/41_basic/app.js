const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const logger = require("morgan");


// 로깅  
app.use(logger("dev"));  // tiny < dev < short < common < combined

// true: qs (확장모듈) , false: querystring(기본모듈)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 정적파일 위치 설정
app.use('/public', express.static("public"));

app.listen(port, () => 
console.log(`Example app listening at http://localhost:${port}`)
);

// 127.0.0.1:3000
app.get('/', (req, res) => res.send('Hello World!'));

// 127.0.0.1:3000/?singer=아이유&title=좋은날
app.get('/music', (req, res) => {
    // 아이유의 좋은날입니다.
    res.send(`${req.query.singer}의 ${req.query.title}입니다.`)
});


// URL 파라매터 방식 (REST API)
// 127.0.0.1:3000/music/아이유/좋은날
app.get("/music/:singer/:title", (req,res) => {
    // console.log(req)
    res.send(
        `URL PARAMS : ${req.params.singer}의 ${req.params.title}입니다`
        )
});
    
// POST 방식
// HTTP Method : GET(조회), POST(생성), PUT(수정), DELETE(삭제)
// HTTP Message = Header + Body
// GET : Header분에 데이터를 전송, 길이의 제한 있음, Caching 있음
// POST : Body부에 데이터를 전송, 길이의 제한 없음, Caching 없음

app.post("/test", (req, res) => {
    res.send(`POST: ${req.body.test1}의 ${req.body.test2}입니다`)
});

app.post("/test/:test1/:test2", (req, res) => {

    const {test1, test2} = req.params; // 객체 구조 분해 할당 (비구조화)
    res.send(`URL PARAMS ${test1} ${test2}`);
})

// put 방식
app.put('/test/:id', (req, res) => {
    const { test1, test2} = req.body;
    res.send(`id ${req.params.id}의 ${test1}이 ${test2}로 교체되었습니다.`);
})


// 여기까지 내려왔다는 것은 위에서 처리가 되지 않은것.
app.use((req, res, next) => {
    const error = new Error("없어");
    error.code = 404;
    next(error);

    // throw new Error("404 읎다.");
})

// 오류 처리 미들 웨어
app.use((err, req, res, next) => {
    // if (err.code)
    //     res.status(err.code);
    // else
    //     res.status(500);  // Internal Server Error
    
    res.status(err.code || 500);

    // if(err.message)
    //     res.send(err.message);
    // else
    //     res.send("Internal Server Error");
    
    res.send(err.message || "Internal Server Error");
})