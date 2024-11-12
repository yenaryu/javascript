//// 형변환 (type conversion)

const A = 1; //number type
const B = "1"; //string type

console.log(A == B); //==동등연산자는 자동적으로 형변환이 일어나 true
console.log(A === B); //===일치연산자는 type까지 비교하여 false -> 일치연산자 사용 권장

const C = 0;
const D = false;
const E = true;

console.log(C == D); //true
console.log(C == E); //false

//참과 거짓 (truthy & fasly)
const fruits = ["사과", "바나나", "포도", "수박"];
const emptyArr = [];

if (fruits) {
    //값이 들어있으니 참
    console.log("배열데이터 안에 아이템이 들어있다");
}

if (emptyArr.length) {
    console.log("배열데이터 안에 아이템이 들어있다");
} else {
    //emptyArr.length = 0 = 거짓
    console.log("배열데이터 안에 아이템이 들어있지 않다");
    console.log("배열의 길이(length)가 0이므로 거짓이다");
}

//감싸면 형변환됨
Number();
String();
