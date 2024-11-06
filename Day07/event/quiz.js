// 모양 바꾸기 프로그램!

// 화면에 네모 박스가 있어요(w:100,h:100,backgroundColor:white)
const boxTag = document.createElement("div");
boxTag.classList.add("box");
document.body.appendChild(boxTag);

const button = [
  {
    text: "사이즈 크게",
    change: () => {
      boxTag.style.height = "200px";
      boxTag.style.width = "200px";
    },
  },
  {
    text: "사이즈 작게",
    change: () => {
      boxTag.style.height = "100px";
      boxTag.style.width = "100px";
    },
  },
  {
    text: "바탕색 빨강색",
    change: () => {
      boxTag.style.backgroundColor = "red";
    },
  },
  {
    text: "바탕색 파란색",
    change: () => {
      boxTag.style.backgroundColor = "blue";
    },
  },
  {
    text: "네모네모",
    change: () => {
      boxTag.style.borderRadius = "0px";
    },
  },
  {
    text: "둥글둥글",
    change: () => {
      boxTag.style.borderRadius = "9999px";
    },
  },
];

button.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v.text;
  btn.addEventListener("click", v.change);
  document.body.appendChild(btn);
});
