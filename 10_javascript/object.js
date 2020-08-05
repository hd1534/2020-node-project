// let person = {
//     age : 0,
// }

let friends = [
    {
        age : 10,
        name : "1번"

    },
    {
        age : 20,
        name : "2번"
    }
]

console.log(friends);
console.log(typeof friends[0].age);



let grades = {
    data : {
        kor : 100,
        mat : 90,
        eng : 95
    },
    print : function () {
        for ( data in this.data)
            console.log(`${data} : ${this.data[data]}`);
    }
};

grades.print();