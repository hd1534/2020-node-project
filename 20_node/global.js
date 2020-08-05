console.time("running time");
console.log("process argv");
console.log(process.argv);
console.log("process env");
console.log(process.env);
console.log("process arch");
console.log(process.arch);
console.log("process platform");
console.log(process.platform);
console.log('Hello, Node.js');
console.log();
global.console.log('Hello, Node.js'); 


console.log('%d + %d = %d', 1, 2, 1+2);
// 1 + 2 = 3

console.log('%d + %d = %d', 1, 2, 1+2, 4);
// 1 + 2 = 3 4

console.log('%d + %d = %d', 1, 2);
//1 + 2 = %d



console.time('test');
console.timeLog('test', 'hi', 'this', 'is', 'cool');  // console.timeLog('label', ['something data']);
console.timeEnd('test');

console.log(process.memoryUsage());
console.log(process.uptime());
console.timeEnd("running time");

return 0;
console.log("return 다음");
process.exit();
console.log("process.exit 다음");