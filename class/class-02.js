////파스칼케이스로 함수를 만들어준다 (생성자 함수 직접 만듬) =  function에서 생성자 함수를 통해서 새로운 객체 생성 방식
//생성자함수 만듦
function User(firstName, lastName) {
    //생성자함수 User (대문자)
    this.firstName = firstName; //인자로받은 firstName이 할당됨 생성자 안에 key값을 만들어줌
    this.lastName = lastName; //인자로받은 lastName이 할당됨
}

const user = new User("이름", "성");
console.log(user);

const user2 = new User("이름2", "성2");
console.log(user2);
//객체 리터럴 방식을 통해서 만든 객체나 함수 내부에서 this라는 키워드로 각각의 속성을 만들고 new라는 키워드를 함께 호출에서 생성하는 객체데이터는 같다고 볼 수 있다.

User.prototype.getFullName = function () {
    //일반함수로. 화살표함수는안됨
    return `${this.firstName} ${this.lastName}`; //user라는 객체에서 로직 선언
};
//getfullname을 쓸수있는 구조가 되었다. = user라는 객체 안에 getfullname이라는게 이미 있다.

console.log(user.getFullName());
console.log(user2.getFullName());
