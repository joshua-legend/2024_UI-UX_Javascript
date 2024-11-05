const list = [1, 3, 5, 7, 9];

//1. 각각 요소를 3배 해서 콘솔로 나타내기!
const triple = (x) => x * 3;
const a1 = list.map(triple);

//2. 각각 요소를 더하기 100 해서 콘솔로 나타내기!
const plusHundred = (x) => x + 100;
const b1 = list.map(plusHundred);

//3. 각각 요소를 6보다 작으면 두배 크면 세배해서 콘솔로 나타내기!
const doubleOrTriple = (x) => (x < 6 ? x * 2 : x * 3);
const c1 = list.map(doubleOrTriple);

//4. 각각 요소를 3의 배수가 아니면 +10 맞으면 두배해서 콘솔로 나타내기!
const isThree = (x) => (x % 3 != 0 ? x + 10 : x * 3);
const d1 = list.map(isThree);

const list1 = [10, 20, 30, 40, 50];
//1. 30보다 작으면 각 요소를 두배, 아니면 그냥 그대로
const a = (x) => (x < 30 ? x * 2 : x);
const answer1 = list1.map(a);

//2. 30이면 "🍔"로 바꾸고, 아니면 "🍕"로 바꾸기
const b = (x) => {
  return x == 30 ? "🍔" : "🍕";
};
const answer2 = list1.map(b);
