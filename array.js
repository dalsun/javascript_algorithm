// 백준 3052번
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 문제풀이 1
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let rest = new Set();

for (let i=0; i<10; i++) {
    let arr = Number(input[i]);
    rest.add(arr % 42);
}

console.log(rest.size);

// 문제풀이 2
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
let mySet = new Set();

for (let i=0; i<10; i++) {
    mySet.add(data[i]%42);
}
console.log(mySet.size);
