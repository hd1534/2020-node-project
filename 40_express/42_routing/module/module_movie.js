var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
  console.log('client로부터 module_movie로 요청이 들어옴');
  next();  // 다음에 실행될 매소드 (밑에 있는 get, post, put, delete 같은거) 미들웨어
});

router.get('/', function(req, res) {
  res.send('module_movie GET 방식 호출');
});

router.post('/', function(req, res) {
  res.send('module_movie POST 방식 호출');
});

router.put('/', function(req, res) {
  res.send('module_movie PUT 방식 호출');
});

router.delete('/', function(req, res) {
  res.send('module_movie DELETE 방식 호출');
});

module.exports = router;