////this
const user = {
    firstName: "이름",
    lastName: "성",
    age: 99,
    getFullName: function () {
        //일반함수의 this는 호출위치에서 정의 -> 호출위치=user
        return `${this.firstName} ${this.lastName}`; //this는 user자체를 받고있다
    },
};

console.log(user.getFullName());

const user2 = {
    firstName: "이름",
    lastName: "성",
    age: 99,
    getFullName: () => {
        //화살표함수가 선언된 시점에 감싸고있는 함수가있어야 this키워드가 정의된다. 화살표 함수의 this는 자신이 선언된 함수(렉시컬)범위에서 정의. getfullname이 정의된 함수가 없음
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(user2.getFullName()); //undefined undefined 왜이거인지 이해가안댐

function user3() {
    this.firstName = "이름";
    this.lastName = "성";
    //화살표함수가 선언된 시점에 감싸고있는 함수가 있을때 this키워드가 정의된다.
    return {
        firstName: "이름",
        lastName: "성",
        age: 99,
        getFullName: () => {
            return `${this.firstName} ${this.lastName}`;
        },
    };
}
console.log(user3().getFullName()); //undefined undefined 왜이거인지 이해가안댐
