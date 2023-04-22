// 백준 13305번 - 주유소

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);
let distance = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);

// 주유 비용(price) 배열의 값을 비오름차순이 되도록 변환
// [5,2,4,1] -> [5,2,2,1]
let minPrice = price[0];
for(let i=1; i<n; i++) {
    minPrice = Math.min(minPrice, price[i]);
    price[i] = minPrice;
}

let answer = BigInt(0);
for(let i=0; i<n-1; i++) {
  // Javascript에서 큰 정수를 처리할 때는 BigInt 사용
  answer += BigInt(distance[i]) * BigInt(price[i]);
}
console.log(String(answer)); // 뒤에 붙는 'n' 제거
