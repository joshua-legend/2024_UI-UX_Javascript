const burgerList = [
  { eng: "shrimp", kor: "새우버거" },
  { eng: "bulgogi", kor: "불고기버거" },
  { eng: "chicken", kor: "치킨버거" },
  { eng: "cheese", kor: "치즈버거" },
  { eng: "rice", kor: "떡불버거" },
];

const sideList = [
  { eng: "potato", kor: "감자튀김" },
  { eng: "cheeseStick", kor: "치즈스틱" },
  { eng: "coleslaw", kor: "코우슬로" },
  { eng: "corn", kor: "콘샐러드" },
];

const drinkList = [
  { eng: "coke", kor: "콜라" },
  { eng: "zerocoke", kor: "제로콜라" },
  { eng: "cider", kor: "스프라이트" },
  { eng: "juice", kor: "오렌지주스" },
];

burgerList.forEach((v) => {
  const burger = document.getElementById(v.eng);
  burger.addEventListener("click", () => {
    const selected = document.getElementById("selectedBurger");
    selected.innerText = `선택된 버거:${v.kor} 🍔`;
  });
});

sideList.forEach((v) => {
  const side = document.getElementById(v.eng);
  side.addEventListener("click", () => {
    const selected = document.getElementById("selectedSide");
    selected.innerText = `선택된 사이드:${v.kor} 🍟`;
  });
});

drinkList.forEach((v) => {
  const drink = document.getElementById(v.eng);
  drink.addEventListener("click", () => {
    const selected = document.getElementById("selectedDrink");
    selected.innerText = `선택된 음료:${v.kor} 🥤`;
  });
});

const buy = document.getElementById("buy");
buy.addEventListener("click", () => {
  const selected = document.getElementById("selectedBurger");
  const selected1 = document.getElementById("selectedSide");
  const selected2 = document.getElementById("selectedDrink");

  alert(
    `${selected.innerText.split(":")[1]} ${selected1.innerText.split(":")[1]} ${
      selected2.innerText.split(":")[1]
    }가 구매되었습니다!`
  );
});
