var express = require('express');
var router = express.Router();
const ctrl = require("./movie.ctrl");

router.use('/', function (req, res, next) {
  console.log('client로부터 movie으로 요청이 들어옴');
  next();  // 다음에 실행될 매소드 (밑에 있는 get, post, put, delete 같은거) 미들웨어
});

router.get('/', ctrl.list);
router.get("/:id", ctrl.detail);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;