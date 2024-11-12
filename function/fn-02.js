//함수의 반환 및 종료
function hello() {
    return "hello";
    //return키워드 이후에 작성된 코드는 동작하지x
}

function plusOne(num) {
    //오류를 방지할 수 있는 방어코드 작성
    if (typeof num === "number") {
        console.log("숫자를 입력하세요");
        return 0;
    }

    //return의 값을 받아서 +1을 해주는 구조
    return num + 1;
}

console.log(plusOne(10)); //10에 num+1
console.log(plusOne()); //NaN -> () : 값이 담겨있지 않기때문에 undefined + 1 : number = 난수출력
