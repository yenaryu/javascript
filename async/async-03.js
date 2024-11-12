//async & await
//promise보다 간편하게 async와 await으로 비동기사용

//promise구조를 반환하는 구조로 비동기 작성하는데, 아래처럼 async를 사용하면 더 깔끔하게 사용 가능
const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    });
};

const b = () => console.log(2);

a().then(() => {
    b();
});

//코드설명
//a()함수는 promise 인스턴스를 반환하는 비동기로 만들어진 코드이고 resolve실행까지 기다렸다가 다음 코드를 진행하는데 await이라는 키워드가 있으면 뒤쪽에있는 비동기함수의 실행을 기다린다는 의미를 가지고있다
//단 await을 사용하려면 반드시 async를 사용하는 함수 안에서만 사용되어야한다
//async와 await은 세트! (await이라는 함수에 async를 걸어줘야함)
//주의점 : await이라는 키워드는 console.log()와 같은 단순이 값을 출력하는 동기 함수등에 붙여서 사용하면 안된다. 콘솔은 promise객체를 반환하지 않기때문. 따라서 async await은 promise를 반환하는 함수에서만 사용해야한다

const fn = async () => {
    await a(); //a()는 promise를 반환하므로 await을 사용할 수 있다 . //await을 걸어놔서 a가 다 실행되고
    b(); //그 후에 b가 실행됨
};
fn();
