// + 버튼, 0 span, - 버튼 만들고
// Count 프로그램 만들기!

// 빼기 버튼 만들기
const minus = document.createElement("button");
minus.innerHTML = "-";

// 더하기 버튼 만들기
const plus = document.createElement("button");
plus.innerHTML = "+";

// 숫자 태그 만들기
const num = document.createElement("span");
num.innerHTML = 0;

// 빼기 버튼에 이벤트 넣기
minus.addEventListener("click", () => {
  num.innerHTML = Number(num.innerHTML) - 1;
});

// 더하기 버튼에 이벤트 넣기
plus.addEventListener("click", () => {
  num.innerHTML = Number(num.innerHTML) + 1;
});

document.body.appendChild(minus);
document.body.appendChild(num);
document.body.appendChild(plus);
