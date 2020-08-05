const userModel = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// id 유효성 체크
const checkId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).end();

  next();
};

const showSignUpPage = (req, res) => {
  res.render("user/signup");
};

const showLoginPage = (req, res) => {
  res.render("user/login");
};

const SignUp = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).send("필수값 누락");

  userModel.findOne({ email }, (err, result) => {
    if (err) return res.status(500).send("서버에러");
    if (result) return res.status(409).send("이미 사용중인 이메일 입니다.");

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return res.status(500).send("암호화 시 오류가 발생했습니다.");
      const user = new userModel({ name: name, email: email, password: hash });
      user.save((err, result) => {
        if (err) return res.status(500).send("회원가입시 오류가 발생했습니다.");
        return res.status(201).send("만들어짐 ㅇㅅㅇ");
      });
    });
  });
};

const LogIn = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("필수 입력값을 다 넣어라");

  userModel.findOne({ email }, (err, user) => {
    if (err) return res.status(500).send("로그인중 서버에러");
    if (!user) return res.status(404).send("없는 계정 입니다.");

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send("로그인중 서버에러");
      if (!isMatch) return res.status(403).send("비밀번호가 틀립니다.");

      const token = jwt.sign(user._id.toHexString(), "secretKey"); //
      userModel.findByIdAndUpdate(user._id, { token: token }, (err, result) => {
        if (err) return res.status(500).send("로그인중 서버에러");
        // 토큰 저장  : 쿠키, local storage , etc ..
        res.cookie("token", token, { httpOnly: true });
        res.json(result);
      });
    });
  });
};

const checkAuth = (req, res, next) => {
  // 모든 화면에서 공통으로 사용되는 값
  res.locals.user = null;

  const token = req.cookies.token;

  if (!token) {
    if (
      req.url === "/" ||
      req.url === "/api/user/signup" ||
      req.url === "/api/user/login"
    )
      return next();
    else return res.redirect("/api/user/login");
  }

  jwt.verify(token, "secretKey", (err, _id) => {
    if (err) {
      res.clearCookie("token");
      return res.render("user/login");
    }
    userModel.findOne({ _id, token }, (err, user) => {
      if (err) return res.status(500).send("인증 시 오류가 발생했습니다.");
      if (!user) return res.render("user/login");
      res.locals.user = { name: user.name, role: user.role };
      return next();
    });
  });
};

const logOut = (req, res) => {
  const token = req.cookies.token;

  jwt.verify(token, "secretKey", (err, _id) => {
    if (err) return res.status(500).send("로그아웃 시 오류가 발생했습니다.");
    userModel.findByIdAndUpdate(_id, { token: "" }, (err, result) => {
      if (err) return res.status(500).send("로그아웃 시 오류가 발생했습니다.");
      res.clearCookie("token");
      res.redirect("/");
    });
  });
};

module.exports = {
  showSignUpPage,
  showLoginPage,
  checkAuth,
  SignUp,
  LogIn,
  logOut,
};
