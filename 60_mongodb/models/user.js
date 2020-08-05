const mongoose = require("mongoose");

// 스키마 정의
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // 앞뒤 공백 자동 제거
    required: true, // 필수 항목인가?
    maxlength: 50, // 최대 길이 지정
  },
  email: {
    type: String,
    trim: true, // 앞뒤 공백 자동 제거
    required: true, // 필수 항목인가?
    unique: true, // 중복 불가
  },
  password: {
    type: String,
    trim: true, // 앞뒤 공백 자동 제거
    required: true, // 필수 항목인가?
  },
  role: {
    type: Number,
    default: 0, // 1 = admin
  },
  token: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now, // 기본값
  },
});

const User = mongoose.model("user", UserSchema); // Users 스키마가 만들어짐

module.exports = User;
