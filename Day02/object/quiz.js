//1.점심메뉴 오브젝트만들기!
//name:"", price: ,kcal: , restaurant: {1:,2:,3:}
// const lunch = {
//   name: "부대찌개",
//   price: 8000,
//   kcal: 500,
//   restaurant: {
//     1: "김밥지옥",
//     2: "비싸다김밥",
//     3: "의정부대찌개",
//   },
// };

// //2.후식메뉴 오브젝트만들기!
// //name, price, kcal는 유저에게 prompt로 각각 입력받고
// //콘솔로 나타내기

// const dessert = {};

// const name = prompt("후식 이름");
// dessert.name = name;

// const price = Number(prompt("후식 가격"));
// dessert.price = price;

// const kcal = Number(prompt("후식 칼로리"));
// dessert.kcal = kcal;

// console.log(dessert);

// 유저에게 태어난 년도를 물어보고
// 무슨띠인지 알려주기
// 2012년 -> 용띠
// 1989년 -> 뱀띠
// 2005년 -> 닭띠

const animal = {
  0: "원숭이띠",
  1: "닭띠",
  2: "개띠",
  3: "돼지띠",
  4: "쥐띠",
  5: "소띠",
  6: "호랑이띠",
  7: "토끼띠",
  8: "용띠",
  9: "뱀띠",
  10: "말띠",
  11: "양띠",
};

const year = Number(prompt("몇년생이에요")); // 1989
alert(`당신은 ${animal[year % 12]}네요!`);
