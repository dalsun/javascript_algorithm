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

// 백준 18870번

/* input.txt
5
2 4 -10 4 -9
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function compare(a,b) {
  return a-b;
}

// 집합(set)으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let newArr = [...new Set(arr)];
newArr.sort(compare);

// 0부터 차례대로 매핑(mapping) 수행
let myMap = new Map();
for (let i=0; i<newArr.length; i++) {
  myMap.set(newArr[i], i);
}

let answer = "";
for (x of arr) {
  answer += myMap.get(x) + " ";
}

console.log(answer);
