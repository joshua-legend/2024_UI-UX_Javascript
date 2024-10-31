// 1. if을 사용해서 유저에게 숫자를 입력받고
// 홀수인지 짝수인지 물어보기
const num = Number(prompt("숫자 입력"));

if (num % 2) {
  console.log("홀수");
} else {
  console.log("짝수");
}

// 2. js시험점수를 물어보고
// 90점 이상 - A, 80점 이상 - B,
// 70점 이상 - C ,60점 이상 - D
// 그 외는 탈락
const js = Number(prompt("JS점수 입력"));

if (js >= 90) {
  console.log("A");
} else if (js >= 80) {
  console.log("B");
} else if (js >= 70) {
  console.log("C");
} else if (js >= 60) {
  console.log("D");
} else {
  console.log("홍콩 못감");
}

// 3. 양의 홀수, 양의 짝수, 0,음의 홀수,음의 짝수
const num1 = Number(prompt("숫자 입력"));
const positive = num1 > 0;
const negative = num1 < 0;
const odd = num1 % 2;
const even = num1 % 2 == 0;

if (positive && odd) {
} else if (positive && even) {
} else if (negative && odd) {
} else if (negative && even) {
} else {
}
