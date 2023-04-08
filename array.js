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

// 백준 1427번
// 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = input[0];  // 수(N) 입력받기
// 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열(Array) 선언
let cnt = Array(10).fill(0);

for (let x of n) { // 한 자리씨 숫자(digit)를 확인하며
  cnt[Number(x)]++;
}

let answer = "";
// 9부터 0까지 하나씩 숫자(digit)를 확인하며
for (let i=9; i >= 0; i--) {
  // 출현 빈도만큼 출력하기
  for (let j=0; j < cnt[i]; j++) {
    answer += i + "";
  }
}

console.log(answer);

