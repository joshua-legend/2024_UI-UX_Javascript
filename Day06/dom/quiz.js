const kimbabList = [
  { name: "김밥", color: "red" },
  { name: "멸치김밥", color: "blue" },
  { name: "참치김밥", color: "skyblue" },
  { name: "제육김밥", color: "pink" },
  { name: "오뎅김밥", color: "yellow" },
  { name: "상추김밥", color: "purple" },
  { name: "깻잎김밥", color: "green" },
  { name: "마라김밥", color: "#e67e22" },
  { name: "누드김밥", color: "#c0392b" },
];

const makeKimbab = (x, y) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  btn.style.backgroundColor = y;
  document.body.appendChild(btn);
};
kimbabList.forEach((x) => makeKimbab(x.name, x.color));
