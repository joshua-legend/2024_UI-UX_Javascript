const gym = {
  memberList: [],
  getInfo() {
    const obj = {
      name: prompt("이름 입력"),
      age: prompt("나이 입력"),
      address: prompt("사는곳 입력"),
    };
    this.memberList.push(obj);
  },
};
