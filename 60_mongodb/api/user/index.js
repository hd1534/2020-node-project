var express = require("express");
var router = express.Router();
const ctrl = require("./user.ctrl");

router.use("/", function (req, res, next) {
  console.log("client로부터 user로 요청이 들어옴");
  next(); // 다음에 실행될 매소드 (밑에 있는 get, post, put, delete 같은거) 미들웨어
});

router.get("/signup", ctrl.showSignUpPage); // 회원가입 페이지
router.get("/login", ctrl.showLoginPage); // 로그인 페이지
router.get("/logout", ctrl.logOut);
router.post("/signup", ctrl.SignUp); // 회원가입
router.post("/login", ctrl.LogIn); // 로그인

module.exports = router;
