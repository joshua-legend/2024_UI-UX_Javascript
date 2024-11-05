const makeBox = () => {
  const box = document.createElement("div");
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.gap = "10px";
  return box;
};
const makeTitle = (box, title) => {
  const h3Tag = document.createElement("h3");
  h3Tag.innerHTML = title;
  box.appendChild(h3Tag);
};

const makeButtonBox = (box) => {
  const buttonBox = document.createElement("div");
  buttonBox.style.display = "flex";
  buttonBox.style.gap = "10px";
  box.appendChild(buttonBox);
  return buttonBox;
};

const makeButton = (text, color) => {
  const button = document.createElement("button");
  button.style.backgroundColor = color;
  button.style.padding = "10px 10px 7px";
  button.style.borderRadius = "10px";
  button.style.border = `1px solid ${color}`;
  button.innerHTML = text;
  return button;
};

const list = [
  {
    title: "Position and Layout",
    buttonList: [
      "positiony",
      "z-index",
      "top",
      "bottom",
      "left",
      "right",
      "Flexbox properties",
      "float",
      "clear",
    ],
    color: "#fac0ba",
  },
  {
    title: "Display and Visibility",
    buttonList: ["display", "opacity", "transform"],
    color: "#ffc089",
  },
  {
    title: "Clipping",
    buttonList: ["overflow", "clip"],
    color: "#ffe18b",
  },
  {
    title: "Animation",
    buttonList: ["animation", "transition"],
    color: "#c8df91",
  },
  {
    title: "Background",
    buttonList: ["background", "cursor"],
    color: "skyblue",
  },
];
list.forEach((x) => {
  const box = makeBox();
  makeTitle(box, x.title);
  x.buttonList.forEach((y) =>
    makeButtonBox(box).appendChild(makeButton(y, x.color))
  );
  document.body.appendChild(box);
});
