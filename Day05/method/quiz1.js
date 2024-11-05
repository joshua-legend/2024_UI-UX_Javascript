// 유저에게 이메일 아이디를 입력받고

const email = prompt("이메일 입력");
const isRightDomain =
  email.includes("naver") || email.includes("gmail") || email.includes("daum");

//koreaIt@naver.com
const emailId = email.split("@")[0]; //koreaIt
const isLengthValid = 4 <= emailId.length && emailId.length <= 16;

if (!isRightDomain) {
  console.log("해당 도메인은 안됩니다!");
} else if (!isLengthValid) {
  console.log("이메일의 주소의 길이가 올바르지 않습니다.");
} else {
  console.log("이메일 주소 등록완료!");
}

// 1. 도메인이 naver,gmail,daum이 아니면
// 해당 도메인은 안됩니다!
// 2. 이메일 주소 아이디의 길이가 4~16글자 사이가 아니면
// 해당 이메일의 주소의 길이가 올바르지 않습니다.
// 위의 내용이 통과되면 이메일 주소 등록완료!
