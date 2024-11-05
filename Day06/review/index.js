const list = [3, 10, 23, 77, 99];
//1. list에서 50이하만 살리기!
list.filter((x) => x <= 50);
//2. list에서 제곱하고 더하기 10하기!
list.map((x) => x ** 2 + 10);
//3. list에서 십의자리와 일의자리가 같은
// 숫자만 살리기!
list.filter((x) => String(x)[0] == String(x)[1]);
