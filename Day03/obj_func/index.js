//일반함수, 화살표함수

// 오브젝트에서 함수를 넣을 때
// 일반함수에서는 this가 먹힘
// 화살표함수에서는 this가 안먹힘

// 일반함수는 리액트 안씀

const student = {
  name: "이유린",
  hello: function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

const student1 = {
  name: "최유린",
  hello() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

const student2 = {
  name: "김유린",
  hello: () => {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};
