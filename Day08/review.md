# 변수, 연산자, 조건문, 함수

- 데이터 타입: 1.기본타입: String, Number, Boolean, Null, Undefined 2.참조타입
  - Array: []
  - Object: {name:[], change:()=>{}}
  - Element: 태그
  - Document: HTML 전체
  - Function: () => {}

# HTML 조작 하기

1. JS로 HTML/CSS 모두 담당!
   -1) JS로 HTML: document.createElement("태그")
   -2) JS로 CSS: element.style.~ or element.style.cssText

2. JS로 HTML만 담당하기!
   -1) CSS 클래스명 모두 만들고, element.classList.add("클래스이름") or toggle("");

3. 이벤트 넣기!
   -1) 이벤트는 클릭, 마우스올리기, 더블클릭 등등 유저에게 상호작용하는 내용들!
   -2) element.addEventListener("이벤트", 함수)!
