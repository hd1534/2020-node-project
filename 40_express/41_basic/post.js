const express = require('express');
const bodyParser = require('body-parser');

const port = 3000

const app = express();
app.use(bodyParser.urlencoded({extended: false}));  //  x-www-form-urlencoded로 들어오는 데이터 파싱
app.use(express.static('public'));	// 정적 파일 위치 설정

app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:%d', port);
});


app.get('/', (req, res) => {
    res.send("<a href=\"/test.html\"> goto /test.html </a>");
});


app.post('/test', function (req, res) {
    console.log('req.body:', req.body);
    var test1 = req.body.test1;
    var test2 = req.body.test2;

    res.send('urlencoded -> test1:' + test1 + ', test2:' + test2);
});