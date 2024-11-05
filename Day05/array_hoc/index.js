const list = [1, 3, 5, 7, 9];

// map: 요소 바꾸기!
// filter: 요소 걸르기!
// every&some: 요소가 모두 있는지 & 요소가 하나라도 있는지 물어보기

const over5 = (x) => x > 5;
list.every(over5); // false
list.some(over5); // true
