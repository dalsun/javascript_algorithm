// 백준 2839번 - 설탕 배달

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]); 
let cnt = 0;
let flag = false;

while (n >= 0) { // 더 이상 반복할 수 없을 때까지 반복
  // n = 0이 되었거나, 5로 나누어 떨어지는 값이 경우
  if (n==0 || n%5==0) { // 5로 나눈 몫을 더하기
    cnt += parseInt(n/5);
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}

if (!flag) {
  console.log(-1);
}

// 백준 16953번 - A->B

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let flag = false;
let cnt = 1;

while (a <= b) {
  if (a==b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) {
    b = parseInt(b/2);
  } else if (b % 10 == 1) {
    b = parseInt(b/10);
  } else break;
  cnt++;
  console.log(b);
}

if (flag) {
  console.log(cnt);
} else {
  console.log(-1);
}
