////화살표함수
function sum(a, b) {
    return a + b; //a와 b의 합을 구하는 함수
}

console.log(sum(1, 2));
console.log(sum(10, 20));

//화살표함수란?
const sum00 = () => {}; //의 형태

//return키워드로 로직이 시작하면 return과 중괄호를 제거하여 사용. 같은 의미 똑같은 값 출력
const sum01 = (a, b) => {
    return a + b;
};

const sum02 = (a, b) => a + b;

const a = (x) => {
    console.log("x:", x);
    return x * x; //로직이 return이 바로 시작되는 것이 아니기때문에, 중괄호 및 return 생략 불가.
};

const b = () => {
    return { value: 1 };
};

const c = () => {
    value: 1;
}; //중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에 자바스크립트 문법적으로 이해할 수 있는 코드가 아니라서 오류가 발생함

const d = () => ({ value: 1 }); //위 문제를 해결하기 위해 객체 데이터를 소괄호 묶어 표현
