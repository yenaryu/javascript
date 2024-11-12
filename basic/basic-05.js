//// 데이터타입 확인

const num = 100;
console.log(typeof num); //number
console.log(typeof "Hello"); //string
console.log(typeof "Hello" === "string"); //true (string === string)
console.log(typeof false === "boolean"); // true (typeof false = bollean)
console.log(typeof undefined === "undefined"); // true (undefined의 type은 undefinded)
console.log(typeof null === "null"); // false (null값의 type은 object)

console.log(typeof null); //object
console.log(typeof []); //object (js에서 배열은 object기반의 함수라서 object 타입을 반환함 / 배열은 array라서 헷갈릴 수 있음)
console.log(typeof {}); //object

console.log([].constructor); //배열의 constructor
console.log([].constructor === Array); //true (배열의 constructor이 array인가?)
console.log({}.constructor === Object); //false (객체의 constructor이 object인가?)

//null타입 데이터 확인 방법 - typeof 사용x
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); //Null (8번째 index N -1)

//함수로 코드 재사용
function checkType(data) {
    //인자 data
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null)); //checkType 함수 생성 -> null이라는 체크할 데이터 넣어줌
console.log(checkType([])); //[]에 대한 타입이 잡힘 -> Array
console.log(checkType({})); //Object 출력
console.log(checkType("안녕하세요")); //string
console.log(checkType(function () {})); //function
console.log(checkType(true)); //boolean
console.log(checkType(undefined)); //undefined
