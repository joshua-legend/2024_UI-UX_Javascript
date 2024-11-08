import { minus, plus } from "./calc.js";
import { goodjob, hello } from "./greeting.js";

console.log(plus(2, 3));
console.log(minus(10, 1));

const a = document.getElementById("a");
const b = document.getElementById("b");

a.addEventListener("click", hello);
b.addEventListener("click", goodjob);
