////콜백
const a = () => {
    console.log("A");
};

const b = () => {
    console.log("B");
};

//함수가 실행될때 인수/인자로 들어가는 또다른 함수를 콜백이라고 한다.
a(b); //b:콜백(콜백함수)

const c = (callback) => {
    //콜백은 함수 데이터이므로, 소괄호를 열고 닫아서 실행시킬 수 있다
    console.log("C");
    callback(); //D를 받아오기때문에, 콘솔이 D로찍힌다.
};

const d = () => {
    console.log("D");
};

c(d); //c함수 호출하는데, 안에 d라는 함수를 넣음. 들어간 데이터타입이 함수인경우에는 콜백(or 콜백함수)라고 부른다

///////
const sum = (a, b) => {
    //인자로 ab받아서
    setTimeout(() => {
        //settimeout으로 1초 딜레이
        return a + b;
    }, 1000);
};

console.log(sum(1, 2)); //sum함수에 retrun이 없다(setTimeout에 return존재)->undefined
console.log(sum(3, 7));

///콜백함수의 경우 (블로그 참조하기 이해가잘x.)
const sum2 = (a, b, c) => {
    setTimeout(() => {
        //1초뒤 실행되고 return없음
        c(a + b); //함수 실행됨 -> 값이 알아서 반환되서
    }, 1000);
};

sum2(1, 2, (value) => {
    //반환값 c가 value에 들어감.
    console.log(value); //콜백함수가 실행되서 return이 없어도
});
