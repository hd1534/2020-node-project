var test = {
    arr : [
        "hi", "nice"
    ],
    test : "it's a test"
};

const str = JSON.stringify(test);
console.log(str);

const obj = JSON.parse(str);
console.log(obj);
console.log(obj.arr[0]);