////getter / setter
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user1 = new User("이름", "성");
console.log(user1); //이름 성
user1.firstName = "이름2";
console.log(user1); //이름2 성 -> firstname이 이름2로 바뀜 그러나 fullname에서 firstname안바뀜
//>생성자 함수로 해당 클래스 호출할때 최초로만 만들어지고 그 다음부터는 firstName과 lastName이 바뀌더라도 전혀 변화가 없는 상태가 됨. 이런 부분을 보완하기 위해 메서드 활용

console.log(user1.getFullName()); //이름2 성으로 나옴 -> 호출한시점에 바뀌기때문에

//함수를 호출하는 것을 좀더 편리하게 쓰기 위해 , 번거로움을 줄이기 위해 getter라는 개념 도입!
//getter는 값을 조회하는 용도의 메서드

class NewUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter
    get fullName() {
        //함수이므로 다양한 로직이 추가될 수 있다.
        return `${this.firstName} ${this.lastName}`;
    }
    //setter
    set fullName(value) {
        //fullname이라는 속성에다가 값을 지정할 때 동작하는 메서드
        console.log(value);
        this.firstName = value.split(" ")[0]; //split라는 프로토타입을 사용해 "" 빈칸으로 쪼개 배열로 반환
        this.lastName = value.split(" ")[1];

        console.log(value.split(" "))[(this.firstName, this.lastName)] =
            value.split(" ");
    }
}
//호출
const user2 = new NewUser("이름", "성");
console.log(user2.fullName); //이름 성

user2.lastName = "성2";
console.log(user2.fullName); //이름 성2

//set이라는 키워드를 통해 만든 fullName이라는 메서드는 해당하는 fullName에다가 할당연산자를 통해 어떤 값을 지정하려 할때 동작하는 메서드라는 점

user2.fullName = "이름2 성2"; //36번줄 consol.log(value)로 할당되어, 출력된다. setter - 할당연산자로세팅
