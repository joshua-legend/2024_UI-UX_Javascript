// const cook = (a) => {
//   console.log("‍🍳요리 준비!‍🍳");
//   a();
//   console.log("‍🍳요리 완성!‍🍳");
// };

// const ramen = () => {
//   console.log("물 끓이기");
//   console.log("스프 넣기");
//   console.log("라면 넣기");
// };

// const chappagetti = () => {
//   console.log("물 끓이기");
//   console.log("면 넣기");
//   console.log("물 빼기");
//   console.log("스프 넣기");
// };

// cook(ramen);
// cook(chappagetti);

// const cook = (recipe) => {
//   console.log("‍🍳 요리 준비!‍🍳");
//   recipe();
//   console.log("‍🍳 요리 완성!‍🍳");
// };

// 🧙 ⚡ 🧊 🔥
// skill이라는 함수가 있고 콜백함수로 다양한 스킬로 받아서 실행되는 함수 구현하기
// skill(번개)
const skill = (magic) => {
  console.log("마법사 스킬준비 🧙");
  magic();
  console.log("마법사 스킬 완료!");
};

const thunder = () => {
  console.log("⚡ 스킬 발동!");
};
const ice = () => {
  console.log("🧊 스킬 발동!");
};
const fire = () => {
  console.log("🔥 스킬 발동!");
};

// const attackSkill = (property) => {
//   console.log(`${property} 스킬 발동!`);
// };
// skill(ice);
// skill(fire);

// 🦐 🍗 🍳 🧀 🥩

// 타코 만들기 함수 만들어주기!
// ~~ 재료 추가! 함수 각각 만들어서
// 유저에게 타코 메뉴를 선택받아서 콘솔로 타코만들고 나타내기!

const makeTaco = (ingrident) => {
  console.log("🌮 만들기!");
  ingrident();
  console.log("🌮 완성!");
};

const shrimp = () => {
  console.log("🦐 넣기");
  console.log("해물소스 뿌리기");
};
const chicken = () => {
  console.log("🍗 넣기");
  console.log("닭소스 뿌리기");
};
const fry = () => {
  console.log("🍳 넣기");
  console.log("머스타드 뿌리기");
};
const cheese = () => {
  console.log("🧀 넣기");
  console.log("파마산 뿌리기");
};
const beef = () => {
  console.log("🥩 넣기");
  console.log("후추 뿌리기");
};

const menu = Number(
  prompt("어떤 타고를 드시겠습니까?(1.새우 2.치킨 3.계란 4.치즈 5.소고기")
);

// const taco = {
//     1:makeTaco(shrimp),
//     2:makeTaco(chicken),
//     3:makeTaco(fry),
// }

if (menu == 1) {
  makeTaco(shrimp);
} else if (menu == 2) {
  makeTaco(chicken);
} else if (menu == 3) {
  makeTaco(fry);
} else if (menu == 4) {
  makeTaco(cheese);
} else if (menu == 5) {
  makeTaco(beef);
} else {
  console.log("그런 메뉴 없음");
}
