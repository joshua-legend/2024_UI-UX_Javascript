// 타코 만들기!
//1. 🦐2$ 🍗2$ 🍳1$ 🧀1$ 🥩3$ 버튼들이 화면에 있음
//2. 총가격: 0$ 가격표시가 화면에 있음
//3. 구매하기 버튼도 화면에 있음
//위에 재료들을 클릭하면 총가격이 올라가고 구매하기 버튼을 누르면!
//총금액은 ~~이고, 구매하신 타코재료는 클릭한 재료! 알럿으로 나오기!

const priceSpan = document.createElement("span");
priceSpan.innerText = "0";
const menu = [
  { name: "🦐2$", price: 2, icon: "🦐" },
  { name: "🍗2$", price: 2, icon: "🍗" },
  { name: "🍳1$", price: 1, icon: "🍳" },
  { name: "🧀1$", price: 1, icon: "🧀" },
  { name: "🥩3$", price: 3, icon: "🥩" },
];
const buyMenu = [];
menu.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v.name;
  btn.addEventListener("click", () => {
    priceSpan.innerText = Number(priceSpan.innerText) + v.price;
    buyMenu.push(v.icon);
  });
  document.body.appendChild(btn);
});
document.body.appendChild(priceSpan);

const buyBtn = document.createElement("button");
buyBtn.innerText = "구매하기";
buyBtn.addEventListener("click", () => {
  alert(`총 금액:${priceSpan.innerText} 메뉴:${buyMenu}`);
});
document.body.appendChild(buyBtn);
