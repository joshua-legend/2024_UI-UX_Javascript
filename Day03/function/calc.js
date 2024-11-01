// 함수가 일급 객체라서 가능
const calc = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multi: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a, b) => a ** b,
};

const first = Number(prompt("첫 번째 수 입력"));
const second = Number(prompt("첫 번째 수 입력"));
const operator = prompt("연산자 입력");

alert(calc[operator](first, second));
