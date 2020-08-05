var fs = require('fs');

// 스트림 생성
var debug = fs.createWriteStream('debug.log');
var error = fs.createWriteStream('error.log');

// 콘솔 클래스 얻기
var Console = console.Console;

// 콘솔 객체 생성
var logger = new Console(debug, error);

logger.log('log message');
logger.info('info message');
logger.warn('warn message');
logger.error('error message');