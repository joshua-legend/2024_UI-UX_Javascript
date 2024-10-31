//calc.js
//첫 번째 숫자 입력 받고, 두 번째 숫자 입력 받고
//연산자를 입력하세요(+,-,*,/,**)
// + -> a+b = sum
// - -> a-b = sub
// * -> a*b = a*b
// / -> a/b = a/b
// ** -> a**b = a**b

const first = Number(prompt("첫 번째 숫자 입력"));
const second = Number(prompt("두 번째 숫자 입력"));
const operator = prompt("연산자 입력하세요(+,-,*,/,**)");

if (operator == "+") {
  console.log(`${first} + ${second} = ${first + second}`);
} else if (operator == "-") {
  console.log(`${first} - ${second} = ${first - second}`);
} else if (operator == "*") {
  console.log(`${first} * ${second} = ${first * second}`);
} else if (operator == "/") {
  if (second == 0) {
    console.log("해당 숫자로 나눌수 없습니다.");
  } else {
    console.log(`${first} / ${second} = ${first / second}`);
  }
} else if (operator == "**") {
  console.log(`${first} ** ${second} = ${first ** second}`);
} else {
  console.log("그런 연산자 없음 ㅅㄱ0");
}
