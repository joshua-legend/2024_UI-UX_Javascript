// function(함수): 레시피
function ramen(x) {
  console.log("물 끓이기");
  console.log("면 넣기");
  console.log("스프 넣기");
  console.log(`${x} 넣기`);
  console.log("3분 기다리기");
  console.log("라면 완성!");
}

function gimbab(x) {
  console.log("김 펼치기");
  console.log("밥 펼치기");
  console.log("일반 재료 넣기");
  console.log(`${x} 재료 추가하기`);
  console.log("돌돌 말기");
  console.log(`${x}김밥 완성!`);
}

const ingredient = prompt("어떤 재료 넣을까요?");
gimbab(ingredient);
