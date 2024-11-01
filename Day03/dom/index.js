// js <-> document[dom] <-> html
// const btn = window.document.createElement("button");
// btn.innerHTML = "홍콩여행";
// btn.style.backgroundColor = "orange";
// window.document.body.appendChild(btn);

// 유저에게 원하는 태그 2번, 안의 내용 2번, 원하는 배경색 2번
// body에 나타내기

const makeTag = {
  tag: "",
  contents: "",
  bgColor: "",
  getInfo() {
    this.tag = prompt("태그 입력");
    this.contents = prompt("내용 입력");
    this.bgColor = prompt("배경색 입력");
  },
  makeTag() {
    const newTag = document.createElement(this.tag);
    newTag.innerHTML = this.contents;
    newTag.style.backgroundColor = this.bgColor;
    document.body.appendChild(newTag);
  },
  start() {
    this.getInfo();
    this.makeTag();
  },
};

makeTag.start();
makeTag.start();
