const coffee_price = prmopt("아메리카노 가격");
const coffee_count = prmopt("아메리카노 갯수");
alert(
  `아메리카노의 총 ${coffee_count} 갯수의 가격은 ${
    Number(coffee_price) * Number(coffee_count)
  }입니다.`
);

const side = prmopt("정사각형의 한변의 길이");
alert(
  `정사각형의 둘레:${Number(side) * 4} 정사각형의 넓이:${
    Number(side) * Number(side)
  }`
);

const base = prmopt("정삼각형의 밑변의 길이");
const height = prmopt("정삼각형의 높이의 길이");
alert(
  `정삼각형의 둘레:${Number(base) * 3} 정삼각형의 넓이:${
    Number(base) * Number(height) * 0.5
  }`
);

const radius = prmopt("반지름의 길이 입력");
alert(
  `원의 둘레:${Number(radius) * 2 * 3.14} 원의 넓이:${
    Number(radius) * Number(radius) * 3.14
  }`
);
