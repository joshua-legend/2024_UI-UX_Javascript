const lotion = document.getElementById("lotion");
const skin = document.getElementById("skin");
const lipbam = document.getElementById("lipbam");
const total = document.getElementById("total");

lotion.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 15000;
});

skin.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 20000;
});

lipbam.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 5000;
});
