function User(firstName, lastName) {
    //생성자함수로 새로운 객체 데이터 생성
    this.firstName = firstName;
    this.lastName = lastName;
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

const user = new User("이름", "성");
const user2 = new User("이름2", "성2");

/////
//위와같은 로직을 class로 바꿔볼 수 있음
class NewUser {
    constructor(firstName, lastName) {
        //생성
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        //필요한 내장함수 작성
        return `${this.firstName} ${this.lastName}`;
    } //프로토타입은 기존에 가지고 있었던 함수를 내장에서 사용하는 문법이다. getfullname이 이미 내장이되어있어서 이 객체를 사용할 수 있음.
}
const user3 = new User("이름3", "성3");
const user4 = new User("이름4", "성4");
//class문법은 js가 기존에 가지고있었던 프로토타입이라는 방식을 내장해서 새로운 문법으로 동작하고 있는 것
//newuser클래스 라고 부를수도 있고, newuser함수라고 부를 수 도있고 newuser객체라고 부를수도있지만 어떻게 불리는지 중요하지x.
//new라는 키워드와함꼐 마치 함수처럼 호출해서 반환된 "인스턴스결과를 통해 데이터를 활용할 수 있다는 점이 중요!"
