const data = [
  {
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQLL0VKBxr9IkeP6S-B3zv07-_7-5haUPAUUkc4LB7B2jKO2Phuca09TPJhaJN5iZy8PGoGcXRQPaUPvAg",
    name: "Donald Trump",
  },
  {
    imgSrc:
      "https://cdn.fortunekorea.co.kr/news/photo/202408/41800_33035_4210.jpg",
    name: "Harrison",
  },
  {
    imgSrc:
      "https://img.khan.co.kr/news/2024/07/17/l_2024071801000532500053221.jpg",
    name: "Biden",
  },
];

const makeStory = (imgSrc, name) => {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.style.cssText =
    "width: 70px; height:70px; object-fit:cover; border-radius:9999px";

  const span = document.createElement("span");
  span.innerText = name;

  const storyBox = document.createElement("div");
  storyBox.style.cssText =
    "display:flex;  flex-direction:column; gap:5px; align-items:center";
  storyBox.appendChild(img);
  storyBox.appendChild(span);
  return storyBox;
};

const container = document.createElement("section");
container.style.cssText = "display:flex; gap: 5px; ";
data.forEach((v) => container.appendChild(makeStory(v.imgSrc, v.name)));
document.body.appendChild(container);
