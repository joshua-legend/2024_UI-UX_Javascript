// 이름 똑같이
// 이미지 똑같이
// color는 이름 색상
// hex_color는 배경색상
// 돈은 원화로 바꿔서 넣기
// 모바일은 [윈도우] -> 윈도우 아이콘, [안드로이드] -> 안드로이드 아이콘 [파이어폭스] -> 파폭 /
// 없으면 -> ?

import { data } from "./data.js";
import { makeProfile } from "./render.js";

const container = document.querySelector(".container");
container.insertAdjacentHTML(
  "beforeend",
  data.map((v) => makeProfile(v.image, v.name, v.money, v.color, v.hex_color, v.mobile)).join("")
);
