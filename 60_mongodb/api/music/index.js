var express = require('express');
var router = express.Router();
const ctrl = require("./music.ctrl");

router.use('/', function (req, res, next) {
  console.log('client로부터 music으로 요청이 들어옴');
  next();  // 다음에 실행될 매소드 (밑에 있는 get, post, put, delete 같은거) 미들웨어
});

router.get('/', ctrl.list);  // 목록 조회
router.get("/id/:id", ctrl.checkId, ctrl.detail);  // 상세 조회
router.post('/', ctrl.create);  // 등록
router.put('/id/:id', ctrl.checkId, ctrl.update);  // 수정
router.delete('/id/:id', ctrl.checkId, ctrl.remove);  // 삭제

router.get("/new", ctrl.showCreatePage);  //  등록 페이지 보여주기
router.get("/id/:id/edit", ctrl.checkId, ctrl.showUpdatePage)  // 수정 페이지 보여주기

module.exports = router;