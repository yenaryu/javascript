////함수
hello(); //함수 호이스팅을 통한 함수 선언
fn();

//힘수 선언문에서 함수 호이스팅이 발생한다
function hello() {
    console.log("hello 함수 호출");
}

//함수 표현식(표현문)에서는 함수 호이스팅이 발생하지 않는다
const fn = function () {
    console.log("이 함수는 함수 표현식으로 작성되었다");
};
