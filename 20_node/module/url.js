var url = require('url');

var urlPath = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=node.js';

var parsed = url.parse(urlPath, true);	// parse : String -> Object 변환  (false면 query를 파싱 안한상태로)
console.log(parsed);

console.log(parsed.host);           // search.naver.com
console.log(parsed.path);           // /search.naver?sm=top_hty&fbm=1&ie=utf8&query=node.js
console.log(parsed.query);          // ? 뒤의 query값을 객체로 리턴
console.log(parsed.query['query']); // node.js 리턴
console.log(parsed.query.query);    // node.js 리턴