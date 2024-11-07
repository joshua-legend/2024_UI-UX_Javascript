const minus = document.getElementById("minus");
const num = document.getElementById("num");
const plus = document.getElementById("plus");

plus.addEventListener("click", () => {
  const number = Number(num.innerText);
  num.innerText = number + 1; // 9 -> 10
  if (number + 1 < 10) {
    num.style.color = "black";
  } else {
    num.style.color = "red";
  }
});
minus.addEventListener("click", () => {
  const number = Number(num.innerText);
  if (number > 0) {
    num.innerText = number - 1;
  }
  if (number - 1 < 10) {
    num.style.color = "black"; // 10 -> 9
  } else {
    num.style.color = "red";
  }
});

// 0이하로 안떨어지도록 수정하기!
// 0~9 검은색 숫자
// 10이상이 되면 빨간색으로 숫자 바뀌기!
