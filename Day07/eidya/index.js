const makeCoffee = (name, imgSrc) => {
  const imgTag = document.createElement("img");
  imgTag.src = imgSrc;
  imgTag.style.cssText = "width: 100px;height:100px;object-fit:cover";

  const spanTag = document.createElement("span");
  spanTag.innerText = name;

  const box = document.createElement("div");
  box.style.cssText = "display:flex; flex-direction:column; align-items:center";
  box.appendChild(imgTag);
  box.appendChild(spanTag);
  return box;
};

const data = [
  {
    name: "꿀맛탱 커피",
    img: "https://ediya.com/files/menu/IMG_1730076235563.png",
  },
  {
    name: "가성비 커피",
    img: "https://ediya.com/files/menu/IMG_1730076504756.png",
  },
  {
    name: "노브랜드 커피",
    img: "https://ediya.com/files/menu/IMG_1730076504756.png",
  },
];

const container = document.createElement("sectoin");
container.style.cssText = "display:flex; gap:30px;";

data.forEach((v) => container.appendChild(makeCoffee(v.name, v.img)));

document.body.appendChild(container);
