//인천공항 A01게이트 비행기 리스트
//비행기정보: 비행기종류, 비행기회사, 출국시간,도착시간, 목적지, 조종사,부조종사, 총승객탑승가능수

const gateA01 = [
  {
    airplaneType: "보잉707",
    company: "진에어",
    departure: "10:00",
    arrival: "12:00",
    destination: "오사카",
    pilot: "김나리",
    coPilot: "전나리",
    passengerTotal: 200,
  },
  {
    airplaneType: "보잉888",
    company: "대한항공",
    departure: "12:00",
    arrival: "14:00",
    destination: "홍콩",
    pilot: "김덕배",
    coPilot: "이흥민",
    passengerTotal: 300,
  },
  {
    airplaneType: "보잉500",
    company: "에어서울",
    departure: "15:00",
    arrival: "16:00",
    destination: "후쿠오카",
    pilot: "김준식",
    coPilot: "엄준식",
    passengerTotal: 250,
  },
];

console.log(gateA01[1]["coPilot"]);
