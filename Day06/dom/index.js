//html[=document]
//element[=tag]
// const btn = document.createElement("button");
// btn.innerHTML = "점메추";
// btn.style.backgroundColor = "red";
// document.body.appendChild(btn);

// const img = document.createElement("img");
// img.src =
//   "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/7305059686/B.jpg?247000000";
// document.body.appendChild(img);

const div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

const btn = document.createElement("button");
btn.innerHTML = "아망추";

div.appendChild(btn);

document.body.appendChild(div);
