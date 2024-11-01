// 함수특) 입력 & 출력
// function fly(x) {
//   console.log("비행기 이륙");
//   console.log(`${x}로 출발!`);
// }
// function add(a, b) {
//   return a + b;
// }
// function minus(a, b) {
//   return a - b;
// }
// function multi(a, b) {
//   return a * b;
// }
// function square(a, b) {
//   return a ** b;
// }

const add = (a, b) => a + b;

const minus = (a, b) => a - b;

const multi = (a, b) => a * b;

const square = (a, b) => a ** b;

const morning = {
  main: "밥",
  sub: "계란",
  cook: () => {
    console.log("요리중!");
  },
};
morning.cook();

// calc 오브젝트 만들고
// add,substract,multiply,divide,sqaure

// 유저에게 두 수를 입력 받고,
// 유저에게 연산자 add,substract,multiply,divide,sqaure를
// 선택하고 결과까지 출력하기!
