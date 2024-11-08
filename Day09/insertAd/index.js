// js로 html 다루기!
// 1. 태그 생성! - createElement, insertAdjacentHtml
// 2. 태그 찾기! - getelement, queryselector
// 3. 이벤트 넣기 - addeventlister, onclick="~~"
const box = document.querySelector(".box");
const menu = ["아메리카노", "라떼", "모카"];
const order = "주문";
box.innerHTML = `<div class="card">
    <ul>${menu.map((v) => `<li>${v}</li>`).join(" ")}</ul>
    <button>${order}</button>
</div>`;
