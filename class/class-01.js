//prototype

// const fruits = ["사과","바나나","체리"] //배열 리터럴방식
const fruits = new Array("사과", "바나나", "체리"); //생성자방식으로 배열 만듦 -> 인스턴스 생성
console.log(fruits);
console.log(fruits.length); //프로토타입이라 length에 접근이 가능하다
console.log(fruits.includes("바나나")); //true. 포함되어있음
console.log(fruits.includes("오렌지")); //false
//include는 배열에서만 쓸 수 있는 인스턴스이다.

//프로토타입
//아래코드는 getName이라는 함수를 새롭게 만든 것
//프로토타입에 새로운 메서드 추가 - getname이라는 "함수를 추가할수있다"
//array라는 배열의 prototype안에 include처럼 추가할 수 있다다
Array.prototype.getName = function () {
    console.log(this); //함수가 선언된 시점의 this접근 this
};
fruits.getName(); //fruits라는 배열데이터 or 인스턴스. 인스턴스에서 쓸수있는 별도의 속성이나 메서드를 등록하는 객체가 프로토타입

const newArr = []; //빈배열을 리터럴형식으로 만들었으니까
newArr.getName(); //생성자 함수가 아닌데 리터럴형식에 포함되어있으니까 getName이라는 함수를 사용할 수 있음

///
const user = {
    firstName: "이름",
    lastName: "성",
    getFullName: function () {
        //객체데이터 내부에서 일반함수를 통해 메서드를 만들게되면 this라는 키워드를 통해 접근할 수 있음
        return `${this.firstName} ${this.lastName}`; //리턴으로 this.fn ln반환
    },
    //또한 객체데이터 내부에 있는 속성에서 function키워드를 사용하는 일반함수를 사용한다면 속성뒤에있는 콜론(:)기호와 function키워드를 생략할 수 있다
};

const user2 = {
    firstName: "이름2",
    lastName: "성2",
};
//객체데이터의 메서드를 일반 함수로 만들면 일반함수에서의 this는 함수가 호출되는 곳에서 정의된다
//즉 user=this
console.log(user.getFullName());

//만약 user2객체 데이터에서도 fullname을 반환하는 메서드를 만들어야 한다면? =fullname을 호출하는 메서드 반환
//1. getFullName을 복사해서 user2내부에 동일하게 만드는 방법 (끼워넣기)
const user21 = {
    firstName: "이름2",
    lastName: "성2",

    getFullName: function () {
        //객체데이터 내부에서 일반함수를 통해 메서드를 만들게되면 this라는 키워드를 통해 접근할 수 있음
        return `${this.firstName} ${this.lastName}`;
    },
};
//>>1번 방식은 정확하게 같은로직을 가지고 있는 함수가 2번 만들어져 비효율적
//2. user.getFullName.call(user2) (usergetname을 할당시키는 방법)
console.log(user.getFullName.call(user2));
//>>재사용하는 코드의 가독성 떨어짐, 메서드를 빌려쓰는 구조에서 본래의 객체도 참조해야하고 어려움 발생
//>>>이러한 단점을 보완하기 위해 프로토타입 사용 (class-02)
