// ⚡ 🧊 🔥
// 알럿으로 ⚡발동!
// 알럿으로 🧊발동!
// 알럿으로 🔥발동!

const skillList = ["⚡", "🧊", "🔥"];
const makeButton = (skill) => {
  const button = document.createElement("button");
  button.innerText = skill;
  button.addEventListener("click", () => {
    alert(`${skill}발동!`);
  });
  return button;
};
skillList.forEach((v) => document.body.appendChild(makeButton(v)));
