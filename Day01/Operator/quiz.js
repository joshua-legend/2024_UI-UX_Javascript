//1. 유저에게 몇년생인지 물어보고
//알럿으로 2006년생 이후면 미성년자입니다! 아니면 성인입니다!
const year = prompt("몇년생?");
const result = Number(year) >= 2006 ? "미성년자" : "성인";
alert(`${result}입니다!`);

//2. 유저에게 키를 물어보고 140 이상이면
//알럿으로 해당 놀이기구를 탈 수 있습니다 아니면 탈 수 없습니다.
const height = prompt("키 몇?");
const result1 = Number(height) >= 140 ? "탈 수 있습니다." : "탈 수 없습니다.";
alert(result1);

//3. 유저에게 영어 점수와 수학 점수를 물어보고
//영어 점수와 수학 점수가 평균이 60점 이상이면 합격이고
//단 둘중 하나라도 60점 이하이면 탈락이고
//또는 평균이 60점 이하여도 탈락입니다.
const math = prompt("수학 점수");
const eng = prompt("영어 점수");

const isMathOver60 = Number(math) >= 60;
const isEngOver60 = Number(eng) >= 60;
const isAvgOVer60 = (Number(math) + Number(eng)) / 2 >= 60;
const result2 = isMathOver60 && isEngOver60 && isAvgOVer60 ? "합격" : "불합격";
alert(result2);

//4. 유저에게 숫자를 입력 받고
// 알럿으로 홀수인지 짝수인지 나타내기
const num = Number(prompt("숫자 입력"));
const result3 = num % 2 ? "홀수" : "짝수";
alert(result3);

// 5. 유저에게 10000~99999 정수를 입력 받고 각 숫자의 단위를 붙혀서 나타내기
// -> 23587 -> 2만3천5백8십7

const num1 = Number(prompt("10000~99999 정수를 입력!"));
const first = parseInt(num1 / 10000); //
const second = parseInt((num1 % 10000) / 1000);
const third = parseInt((num1 % 1000) / 100);
const fourth = parseInt((num1 % 100) / 10);
const fifth = parseInt(num1 % 10);
alert(`${first}만 ${second}천 ${thrid}백 ${fourth}십 ${fifth}`);
