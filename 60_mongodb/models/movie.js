const mongoose = require("mongoose");

// 스키마 정의
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true, // 앞뒤 공백 자동 제거
    required: true, // 필수 항목인가?
  },
  director: {
    type: String,
    trim: true, // 앞뒤 공백 자동 제거
    required: true, // 필수 항목인가?
  },
  year: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now, // 기본값
  },
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션을 없으면 자동으로 만들어 작업함
// model(모델명, 스키마, 컬렉션명) -> 명시된 컬렉션명으로 작업함.
const Movie = mongoose.model("movie", MovieSchema); // movies 스키마가 만들어짐

module.exports = Movie;
