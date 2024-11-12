//동기 비동기
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 1000);
console.log(4);
//1243 순으로 출력 -> 순차적으로 출력x = 비동기

//클릭을 해야 이벤트하는 것으로 비동기적인 것
const btnEl = document.querySelector("button"); //돔api태크 d.qs
btnEl.addEventListener("click", () => {
    console.log("버튼이 클릭되었습니다");
}); //이벤트 추가 //이거 콘솔오류남 챗지피티 찾아보기 코드오류는x

///콜백패턴 - 비동기적으로 함수 호출
const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback(); //콜백함수 - 1초뒤어 함수 실행
    }, 1000);
};

const b = (callback) => {
    setTimeout(() => {
        console.log(2);
        callback(); //콜백함수 - 1초뒤어 함수 실행
    }, 1000);
};
const c = (callback) => {
    setTimeout(() => {
        console.log(3);
        callback(); //콜백함수 - 1초뒤어 함수 실행
    }, 1000);
};
const d = () => {
    console.log(4);
};

//타고타고타고 호출되는 ... 호출했을 때 콜백지옥
a(() => {
    b(() => {
        c(() => {
            d(); //콜백이 많아지면 많아질수록 depth가 깊어진다. =개미지옥같은 콜백지옥
        });
    });
}); //a();로 하면 오류가남. a안에 콜백()=>{}을 넣어주니까 콘솔에 1이찍힘.
