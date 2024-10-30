// 유저에게 첫번째 숫자 물어보기
// 유저에게 두번째 숫자 물어보기
// const first = prompt("첫 번째 숫자");
// const second = prompt("두 번째 숫자");

// const a = Number(first);
// const b = Number(second);

// alert(`${first}와 ${second}의 합은:${a + b}`);

// 유저에게 나이를 물어보고 몇년생인지 알럿으로 알려주기!
const age = prompt("님 몇살?");
const year = 2025 - Number(age);
alert(`${age}살은 ${year}년생 입니다!`);

// 유저에게 현재 원화를 입력하면 엔화로 바꿔서 알럿으로 알려주기!

const won = prompt("원화 입력");
const yen_rate = 0.11;
const yen = Number(won) * yen_rate;
alert(`${won}원은 ${yen}엔 입니다!`);

// 유저에게 비트코인 BTC를 입력받고 원화로 바꿔서 알럿으로 알려주기
const btc = prompt("비트코인 입력");
const won_rate = 100279000;
const won1 = Number(btc) * won_rate;
alert(`${btc}BTC는 ${won1}원 입니다!`);
