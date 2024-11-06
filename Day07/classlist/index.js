// const button = document.createElement("button");
// button.innerText = "오렌지";
// button.className = "bold orange button"
// button.classList.add("bold");
// button.classList.add("orange");
// button.classList.add("button");
// document.body.appendChild(button);

const button = document.createElement("button");
button.innerText = prompt("버튼 내용 입력");

//색상[orange,green,pink] 글씨두께[light,bold,bolder]를
[prompt("색상 입력"), prompt("두께 입력"), "button"].forEach((v) =>
  button.classList.add(v)
);

document.body.appendChild(button);
