// for문을 이용한 숫자 더하기
function sum(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) count = i + count;
    return count;
}

// 특정 문자열 세기

function countLetter(str) {
    let count = 0;
    for (let i = 0; i <= countLetter.length; i++) {
        count = str.split("a").length - 1;
    }
    console.log(count);
}

// 문자열 삽입

function makeNumber(num) {
    let str = "";
}

function makeNumber(num) {
    let answer = "";
    for (let i = 1; i <= num; i++) {
        answer += i;

        if (i !== num) {
            answer += "-";
        }
    }
    return answer;
}

makeNumber(2);

function makeOdd(num) {
    let answer = "";

    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            answer += i;
        }
    }
    return answer;
}

makeOdd(5);

function bigNum(str) {
    let biggest = Number(str[0]);

    for (let i = 1; i < str.length; i++) {
        if (Number(str[i]) > biggest) {
            biggest = Number(str[i]);
        }
    }
    return biggest;
}

bigNum("57832");

function grade(score) {
    if (score > 100 || score < 0) {
        return "잘못된 점수입니다.";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

grade(false);

const myShopping2 = [
    { category: "과일", price: 12000 },
    { category: "의류", price: 10000 },
    { category: "의류", price: 20000 },
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000 },
    { category: "과일", price: 8000 },
    { category: "의류", price: 7000 },
    { category: "장난감", price: 5000 },
    { category: "의류", price: 10000 },
];
function myPage() {
    let count = 0;
    let amount = 0;
    let grade = "";

    // for(let data of myShopping2) {
    //   console.log(data)
    // }

    for (let i = 0; i < myShopping2.length; i++) {
        if (myShopping2[i].category === "의류") {
            count++;
            amount += myShopping2[i].price;
        }
    }
    if (count >= 5) {
        grade = "Gold";
    } else if (count >= 3) {
        grade = "siver";
    } else {
        grade = "Bronze";
    }
    // return "의류를 구매한 횟수는 총 " + count + "회 금액은 " + amount + "원이며 등급은 " + grade + "입니다"
    return `의류를 구매한 횟수는 총 ${count}이며 금액은 ${amount}이며 등급은 ${grade}입니다`;
}

myPage();

const myShopping = [
    { category: "과일", price: 12000 },
    { category: "의류", price: 10000 },
    { category: "의류", price: 20000 },
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000 },
    { category: "의류", price: 10000 },
    { category: "과일", price: 8000 },
    { category: "의류", price: 7000 },
    { category: "장난감", price: 5000 },
    { category: "의류", price: 10000 },
];
function myPage() {
    let count = 0;
    let amount = 0;
    let grade = "";

    // for(let data of myShopping) {
    //   console.log(data)
    // }

    for (let i = 0; i < myShopping.length; i++) {
        if (myShopping[i].category === "의류") {
            count++;
            amount += myShopping[i].price;
        }
    }
    if (count >= 5) {
        grade = "Gold";
    } else if (count >= 3) {
        grade = "siver";
    } else {
        grade = "Bronze";
    }
    // return "의류를 구매한 횟수는 총 " + count + "회 금액은 " + amount + "원이며 등급은 " + grade + "입니다"
    return `의류를 구매한 횟수는 총 ${count}이며 금액은 ${amount}이며 등급은 ${grade}입니다`;
}

myPage();

// int solution(const char* s) {
//     int answer = 0;
//     return answer;
// }

function solution(arr) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
