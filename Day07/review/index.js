const makeButton = (title) => {
  const button = document.createElement("button");
  button.innerHTML = title;
  button.style.backgroundColor = "#6C5DD3";
  button.style.border = "1px solid #6C5DD3";
  button.style.color = "#ffffff";
  button.style.padding = "15px 20px";
  button.style.borderRadius = "12px";
  button.style.fontWeight = "600";
  return button;
};

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.width = "fit-content";

const list = ["Dashboard", "Orders", "Analytics", "Customer", "Menu"];
list.forEach((v) => container.appendChild(makeButton(v)));
document.body.appendChild(container);
