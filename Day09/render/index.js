import { menu } from "./data.js";
import { makeCard } from "./render.js";

const container = document.querySelector(".container");

//1. innerHTML = "<div>빵</div>"
// container.innerHTML = `
//     ${menu.map((v) => makeCard(v.imgSrc, v.name)).join("")}
// `;

//2. insertAdjacentHTML
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
