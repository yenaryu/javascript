////js type

//1. 문자열 string
const str1 = "hello world"; //const:키워드 / str1:식별자 / "":문자열데이터
const str2 = "world";
const str3 = `hello, ${str2}`; //`백틱` : `문자열,${상수데이터}` -> 데이터 자체를 문자로 받아서 ${}로 받아서 데이터 출력 -> 문자열로 출력됨

console.log(str3);

//2. 숫자열 number
const num1 = 123;
const num2 = -123; //음수
const num3 = -123.5678;
const pi = 3.14; //부동소수점

console.log(num3 + undefined); //출력값 NaN -> 숫자데이터+다른타입 값 연산 -> 연산 자체가 안되서 number가 아니라는 뜻으로 난수 출력
console.log(typeof (num3 + undefined)); //NaN은 숫자데이터 타입이기 때문에, 출력값 number
console.log(typeof pi); //출력값 number

const a = 0.1;
const b = 0.2;

console.log(a + b); //0.30000000000000004
console.log(typeof (a + b).toFixed(1)); //string
// tofixed(1)은 숫자를 소숫점 첫째자리까지 반올림 후 문자열로 변환하여 반환 -> "0.3"인 "string"을 반환함.
console.log(typeof Number((a + b).toFixed(1))); //number -> 문자열로 바뀐 타입을 데이터 Number 타입으로 형변환
console.log(Number((a + b).toFixed(1))); //0.3 (소숫점 첫째짜리까지 출력)
//toFixed함수 : 고정 소수점 표기법을 사용해서 나타낸 수를 문자열로 바꾼 값. 항상 문자열을 반환함.(숫자반환x)

//3. 불린 불리언 boolean - true false(논리값)
const truty = true;
const falsy = false;

if (falsy) {
    console.log("조건식이 참입니다");
} else {
    console.log("조건식이 거짓입니다");
}

if (typeof truty === "string") {
    //truty는 boolean타입이기때문에 string타입을 넣으면 오류 -> else값 출력
    console.log("조건식이 참입니다");
} else {
    console.log("조건식이 거짓입니다");
}

//4-1. null
let value1 = null; //value1이라는 초기값에 의도적으로 null이라는 데이터를 삽입(의도O)
console.log(value1); //null
console.log(typeof value1); //object -> null타입은 object(객체)타입의 데이터가 있는지 없는지 사용됨 -> 그래서 typeof로 출력할 때 object 출력

//4-2. undefined
setTimeout(() => {
    //setTimeout : 딜레이 함수 (1초 뒤에 출력) -> 비동기함수
    value1 = 30;
    console.log(value1); //30
}, 1000);

let value2; //값이 아무것도 들어있지 않음 let value2 = "값" -> undefined
console.log(value2); //undefined
//value2가 value1보다 코드가 더 아래 있음에도, value2가 먼저 출력됨 -> 비동기

////
const user = {
    name: "data",
    age: 999,
};
console.log(user.name);
console.log(user.age);
console.log(user.email); //undefined -> 객체데이터에 참조할 값이 없음
