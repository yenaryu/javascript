//resolve reject error handing
const delayAdd = (index, callback, error) => {
    //인자 3개 받음
    setTimeout(() => {
        if (index > 10) {
            //에러함수데이터
            error(`${index}는 10보다 클 수 없습니다.`); //에러함수가 실행되는코드
            return;
        }

        console.log("index:", index);
        callback(index + 1); //콜백함수 / index+1을 인자로 넘겨받음
    }, 100);
};

//에러핸들링
delayAdd(
    4, //4는 index에 들어감
    (res) => console.log(res), //index가 10보다 작으니까, settimeout무시되고, 콜백에서 5가 출력됨
    (err) => console.log(err) //콜백이 돌지 않으니까 error은 무시됨
);

delayAdd(
    14, //14가 index에 들어감
    (res) => console.log(res), //10보다 큼
    (err) => console.log(err) //에러 콜백되서 13은 10보다 클 수 없습니다가 출력
);

//promise 인자에는 resolve와 reject가 있다. promise인스턴스를 사용해서  불필요한 인자(callback, error)를 줄이기.
const newDelayAdd = (idx) => {
    //idx:인덱스 cb:콜백 err:에러 ->resolve와 reject의 사용으로, cb와 err을 삭제해도 됨
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idx > 10) {
                reject(`${idx}는 10보다 클 수 없습니다.`); //error -> reject로 대체
                return;
            }

            console.log("idx:", idx);
            resolve(idx + 1); //callback -> resolve로 대체
        }, 1000);
    });
};

//promise 인스턴스를 반환하기 때문에 then메서드를 사용할 수 있음
newDelayAdd(9)
    .then((res) => console.log(res)) //10
    //9는 10보다 작아서, resolve에서 index+1 10으로 리턴됨. 그렇게 promise객체를 반환시켰으니까 then을 사용할 수 있다
    .catch((err) => console.log(err)) //에러는 발생하지 않아서 무시됨 (error을 catch로 잡음 = 오류를 잡음)
    .finally(() => console.log("done!")); //finally메서드나 구분같은 경우에는 비동기 코드 내부의 resolve, reject가 실행되는 것과 상관없이 항상 실행되는 구조이다

//비동기호출
const wrap = async () => {
    //async await에러핸들링 -> trycatch구문을 사용해서 에러핸들링을 한다
    const res = await newDelayAdd(9);
    try {
        console.log(res);
    } catch (error) {
        console.error(error);
    } finally {
        //finally 메서드나 구문은 비동기 코드 내부의 resolve, reject가 실행되는 것과 상관없이 항상 실행되는 구조이다
        console.log("완료");
    }
};
wrap(); //콘솔 찍히게
