// event:상호작용 하는거
// 클릭, 글쓰기, 스크롤, 데이터가져오기, ...

//버튼 생성하기
const btn = document.createElement("button");
//버튼에 글"버튼"넣기
btn.innerHTML = "버튼";
// 헬로우 함수 만들기
const hello = () => {
  alert("안녕!");
};
//버튼에 이벤트넣기(클릭,헬로우)
// addEventListener(이벤트, 이벤트가 발생했을 때 일어나는 함수);
btn.addEventListener("click", hello);
document.body.appendChild(btn);
