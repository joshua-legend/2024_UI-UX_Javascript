const fruits = ["orange", "strawberry", "melon", "peach", "pineapple"];

// 1.각 요소를 문자의 길이로 바꾸기!
const changeLength = (x) => x.length;
const a1 = fruits.map(changeLength);

// 2.각 요소를 대문자화 시키기!
const upper = (x) => x.toUpperCase();
const a2 = fruits.map(upper);

// 3.각 요소에서 문자의 길이가 5글자 이하이면 '🍎' 아니면 '🍋'
const changeFruits = (x) => (x.length <= 5 ? "🍎" : "🍋");
const a3 = fruits.map(changeFruits);
