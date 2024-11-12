////콜백지옥을 해결하기 위해 promise 사용
const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
};

const b = () => console.log(2);

//콜백을 합쳐줌
a(() => {
    b();
});

/////
///비둥기를 만들어주는 방법 promise
const c = () => {
    //callback을 대신해서 매개변수 resolve를 callback이 실행되는 부분에서 대신해서 실행시켜준다
    return new Promise((resolve) => {
        //비동기적인 promise 객체가 생성된후에, 콜백이 싷행될건데 그 후에 비동기적인 d를 실행
        setTimeout(() => {
            console.log(3);
            resolve(); // callback -> reslove로 대체. resolve로 콜백이 실행된다
        }, 1000);
    }); //비동기로 처리할때 promise의 구조 = return new Promise(()=>{});
};

const d = () => console.log(4);

//빈환되는것이 promise 인스턴스에서는 then이라는 메소드를 쓸수있음!!
//promise에서 만ㄷ르어진 인스턴스에서는 then이라는 메서드를 이어서 (메서드체이닝) 방식으로 작성이 가능하다
c().then(() => {
    //then : 그리고나서
    d();
});

/////
const e = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(5);
            resolve();
        }, 1000);
    });
};
const f = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(6);
            resolve();
        }, 1000);
    });
};
const g = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(7);
            resolve();
        }, 1000);
    });
};
const h = () => console.log(8);

e().then(() => {
    f().then(() => {
        g().then(() => {
            h();
        });
    });
}); //e를 호출한 후 그러고 나서, f호출 .

//프로미스라서 then메소드 그대로 사용 가능.
//프로미스에서 만들어진 인스턴스에서는 then이라는 메서드를 이어서 체이닝 형식으로 활용할 수 있다 그리고 화살표함수에서는 return키워드가 바로 나오면 중괄호와 return키워드를 생략할 수 있다.
//반환값이 있을때만 then메서드를 쓸 수 있다. then메소드는 api호출할때 많이 사용한다
e()
    .then(() => {
        return f();
    })
    .then(() => {
        return g();
    })
    .then(() => {
        h();
    });

// return키워드와 {중괄호} 제거 가능
e()
    .then(() => f())
    .then(() => g())
    .then(() => {
        h();
    });

//promise에서 resolve는 하나의 함수 데이터만 받으면 된다

//함수데이터로만 실행 가능하기때문에, 축약형의 코드로 작성 가능(간단하게 표기)
e()
    .then(f)
    .then(g)
    .then(() => {
        h();
    });

//64~부터 다 같은 뜻의 코드
