// 백준 11047번 - 동전 문제

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let [a, b] = input[0].split(" ").map(Number); // a : 동전 개수, b : 만들어야 할 금액
let coin = [];
let cnt = 0;

for (let i=1; i<=a; i++) {
  coin.push(input[i].split('\n').map(Number));
}

// 가치가 큰 동전부터 확인
for (let i=a-1; i>=0; i--) {
  if (coin[i] > b) {
    continue;
  } else {
    cnt += parseInt(b / coin[i]); // 해당 동전 사용 개수
    b = b % coin[i]; // 해당 동전으로 모두 거슬러 준 뒤 남은 금액
  }
}
console.log(cnt);