////식별자

/// 변수 let
let age = 30; // let :  키워드(식별자) / age : 식별자 / 30 : 데이터값

//함수
function setAge() {}

// 상수 const(객체)
const obj = {
    age: 10,
    ["my name"]: "이름", //공백있는 식별자를 쓰고 싶을 때 []
};

//콘솔
console.log(obj["my name"]);
console.log(obj.age);

/// 상수 const
const NATIONALITY = "korea";
