////재귀
let i = 0;
const a = () => {
    console.log("A");
    i += 1; //값에 1을 더한다

    if (i < 4) {
        a(); //a함수를 자기 자신 내에서 또 사용하는 것을 재귀함수라고 한다. 조건을 넣어줘서 브레이크를 걸어줘야함. 안그러면 무한으로 돌기때문에 반드시 조건을 넣어줘야한다.
    }
};

a();

const userA = {
    name: "A",
    parent: null,
};

const userB = {
    name: "B",
    parent: userA,
};

const userC = {
    name: "C",
    parent: userB,
};

const userD = {
    name: "D",
    parent: userC,
};

const getRootUser = (user) => {
    //해당 인자로 받는 데이터user
    if (user.parent) {
        //만약 부모 요소가 있으면 가져와서 값을 리턴
        return getRootUser(user.parent); //getRootUser 같은함수 다시 호출=재귀함수
    }
    return user; //더이상 부모 요소가 없다면 user을 출력하라
};

getRootUser(userD);
console.log(getRootUser(userD)); //{name: 'A', parent: null}
