// 유저에게 구매물품, 가격을 총 3번 물어보고
// 총 구매상품 리스트
// 총 금액
// 오브젝트 타입과 함수를 사용해서 코드를 만드세요!

const cart = {
  list: [],
  sum: 0,
  shopping() {
    const item = prompt("구매 물품");
    const price = Number(prompt("구매 가격"));
    this.list.push(item);
    this.sum = this.sum + price;
  },
  show() {
    console.log(`구매 품목 리스트:${this.item}, 총 금액: ${this.sum}`);
  },
};

cart.shopping();
cart.shopping();
cart.shopping();
cart.show();
