function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); //3
console.log(sum(7)); //a는 7 b는 undefined = NaN

////매개변수 패턴 (Parameter pattern)
//기본값 (default value)
function sum1(a, b = 1) {
    return a + b;
}

console.log(sum1(1, 2)); //3
console.log(sum1(7)); //default value로 b가 1로 셋팅되어있기 때문에 7+1 = 8

////구조분해 할당
const user = {
    name: "이름",
    age: 99,
};

function getName(name) {
    const { name } = user;
    return name;
    //return user.name과 같은 의미
}

function getName2({ name }) {
    return name;
}
getName2(user); //name만 출력됨

function getEmail({ email = "이메일은 없습니다." }) {
    //email에 default value 셋팅
    return getEmail;
}

const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];

function getSecondItem([a, b, c]) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
}

console.log(getSecondItem(fruits));

//나머지 매개변수
function add(...rest) {
    console.log(rest);
    console.log(arguments); //유사배열(array-like) 배열 데이터는 아니기때문에 활용도가 많이 떨아짐

    return rest.reduce(function (acc, cur) {
        //acc:누적값 / cur:현재값
        return acc + cur;
    }, 0);
}
