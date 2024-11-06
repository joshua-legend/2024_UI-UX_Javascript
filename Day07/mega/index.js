const list = ["처음", "1", "2", "3", "4", "다음", "마지막"];
const makeButton = (text) => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = text;
  return button;
};

list.forEach((v) => document.body.append(makeButton(v)));
