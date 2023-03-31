// 백준 2675번
/* 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.
QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다. */

/* input.txt
2
3 ABC
5 /HTP
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);

// 한 줄(line)씩 입력받기
for (let i=1; i<=n; i++) {
  let [r, s] = input[i].split(" ");
  let result = "";
  // 현재 문자열의 각 문자를 하나씩 확인하며
  for (let j=0; j<s.length; j++) {
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}

// 백준 2908번
// 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 
// 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.
// 상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 
// 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

/* input.txt
734 893
*/

// 풀이 1
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let arr = input[0].split(" ");
let arr_2 = [];

for (let i=0; i<arr.length; i++) {
  arr_2.push(Number(arr[i].split("").reverse().join('')));
}

if (arr_2[0] > arr_2[1]) {
  console.log(arr_2[0]);
} else {
  console.log(arr_2[1]);
}

// 풀이 2
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let a = input[0].split(" ")[0];
let b = input[0].split(" ")[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));

// 백준 1316번
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 
// 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

/* input.txt
3
happy
new
year
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;

for (let i=1; i<=n; i++) {
  let word = input[i];
  if (check(word)) {
    cnt += 1;
  }
}
console.log(cnt);

function check(data) {
  let setData = new Set(data[0]);
  for (let i=0; i < data.length -1; i++) {
    if (data[i] != data[i+1]) {
      if (setData.has(data[i+1])) {
        return false;
      } else {
        setData.add(data[i+1]);
      }
    }
  }
  return true;
}
