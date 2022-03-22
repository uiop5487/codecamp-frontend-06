// 조건문 연습
function boolean(input1, input2) {
    if (input1 === true || input2 === true) {
        return true;
    } else if (input1 === false && input2 === false) {
        return false;
    }
}

// 입력되는 숫자 짝수, 홀수 구분

function evenOdd(num) {
    if (num === 0) {
        return "zero";
    } else if (num % 2 === 0) {
        return "Even";
    } else if (num % 2 === 1) {
        return "Odd";
    }
}

// 온도 구분

function temperature(num) {
    if (num >= 24) {
        return "조금 덥습니다.";
    } else if (num <= 23 && num >= 19) {
        return "날씨가 좋네요.";
    } else if (num <= 18) {
        return "조금 춥네요.";
    }
}

// 미니 계산기

function calcilator(num1, num2, operator) {
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "/") {
        console.log(num1 / num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else {
        console.log("올바른 입력이 아닙니다");
    }
}

calcilator(1, 2, "+");

// 달에 맞는 날짜 구하기

function days(month) {
    if (month === 2) {
        return 28;
    } else if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
    ) {
        return 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
}

// 객체를 활용하여 풀이

function days(month) {
    const obj = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    };
    return obj[month];
}

const day = "월요일";
let result = "";
switch (day) {
    //   case "월요일" :
    //     result = "오늘은 월요일"

    //   case "화요일" :
    //     result = "오늘은 화요일"

    //   case "수요일" :
    //     result = "오늘은 수요일"
    default:
        result = "오늘은 " + day + "입니다.";
}
//switch 문은 케이스가 위에서 맞아도 아래까지 돌아감
