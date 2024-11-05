// 0, "", null, undefined, [] -> falsy
// 그 외 -> truthy
const a = true || "요거트";
const b = false || "요거트";

const user = prompt("고객님 이름");
const name = user || "Guest";
console.log(`${name}님이 들어왔습니다!`);

const c = true && "콜라";
const d = false && "물";

// 1. 유저에게 프롬프트로 비밀번호 입력을 받고
// 비밀번호가 "1234"면 로그인 성공!
// 아니면 아무것도 안일어나기!

const password = prompt("비밀번호 입력!");
const isLogin = password == "1234";
isLogin && alert("로그인 성공!");
