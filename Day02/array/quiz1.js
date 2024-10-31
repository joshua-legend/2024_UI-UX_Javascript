//헬스장 인원 리스트가 있다고 가정함!
const gym = [];

const member1 = {};
member1.name = prompt("이름 입력");
member1.age = prompt("나이 입력");
member1.gender = prompt("성별 입력");
member1.address = prompt("사는곳 입력");
member1.phone = prompt("전화번호 입력");
gym.push(member1);

const member2 = {};
member2.name = prompt("이름 입력");
member2.age = prompt("나이 입력");
member2.gender = prompt("성별 입력");
member2.address = prompt("사는곳 입력");
member2.phone = prompt("전화번호 입력");
gym.push(member2);

console.log(gym);
