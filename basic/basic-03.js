//// 참조 type
//배열
const fruits01 = new Array("사과", "바나나", "딸기"); // new Array : 새로운 배열을 만든다
console.log(fruits01); //(3) ['사과', '바나나', '딸기']

//배열리터럴
const fruits02 = ["사과", "바나나", "딸기", "수박"]; //[배열데이터]

console.log(fruits02); //(4) ['사과', '바나나', '딸기', '수박']
console.log(fruits02[1]); //바나나 -> 배열데이터 인덱싱 / 배열의 index번호는 0번부터 시작함
console.log(fruits02.length); //4 -> length:배열데이터의 길이(요소가 4개)
console.log(fruits02[fruits02.length - 1]); //4(배열데이터의 길이 fruits02.length)-1 = 3 -> index번호가 3인데이터 -> 수박 = 해당 배열의 가장 마지막 요소 조회
console.log(fruits02[0]); //사과

//객체
const user01 = new Object(); //생성자 함수를 통해 객체 생성

user01.name = "이름";
user01.age = 99;
user01.job = "programmer";

console.log(user01);

//객체 리터럴
const user02 = {
    name: "이름",
    age: 99,
    job: "programmer",
};
console.log(user02);
console.log(user02.name); //객체에서는 .표기법으로 접근
console.log(user02["job"]); //대괄호표기법

const user03 = {
    name: "이름03",
    age: 100,
    job: "student",
};

const user04 = {
    name: "이름04",
    age: 10,
    brother: user03, //객체 안에 또 다른 객체를 할당
};

console.log(user04.brother); //user03이 출력된다.
console.log(user04.brother.name); //user03의 name이 출력된다.
console.log(user04.brother["job"]); //user03의 job이 출력된다.

const family = [user03, user04];
console.log(family); //user03 user04에 대한 객체 데이터 출력
console.log(family[0].name); //user03 = index0의 name
console.log(family[1]["name"]); // user04 = index1의 name -> ["name"]보다는 .name사용을 권장
