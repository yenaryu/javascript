//// 산술연산자
console.log(10 + 20);
console.log(20 - 10);
console.log(10 * 20);
console.log(20 / 10);

//나머지 연산자를 통해 짝/홀수 구분
console.log(20 % 3); //나머지연산자 : 나머지값을 반환. => 나머지2

//짝수를 구하는 함수
function isEven(num) {
    return num % 2 === 0; //2로 나눈 값이 0이면 true 리턴
}

console.log(isEven(5)); //false
console.log(isEven(10)); //true

let a = 10; //할당 때문에 const사용x
a = a + 10;
console.log(a);

////증강연산자  increment & decrement
let c = 30;
console.log(c++); //30 -> 로직실행 뒤 ++가 연산이라 그대로 30
console.log(c); //31 ->나중에 증가

let d = 30;
console.log(++d); //31 -> ++가 먼저 증가되고 로직실행되서 31
console.log(d); //31

let e = 30;
console.log(e--); //30 -> 로직 실행 뒤 --되어 그대로 30
console.log(e); //29 -> 나중에 감소

let f = 30;
console.log(--f); //29 -> --로 먼저 감소되고 로직 실행되서 29
console.log(f); //29

for (let i = 0; i < 10; i++) {
    //로직이 동작이 되고 i가 +1
}
