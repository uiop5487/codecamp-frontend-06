//배열의 같은 숫자 빼기
function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 배열의 평균값 구하기
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

//배열의 특정부분 제거 후 변경
function solution(phone_number) {
  let answer = "";

  // 1. 뒷 4자리를 제외한 앞에 번호를 변경
  answer = answer.padStart(phone_number.length - 4, "*");
  console.log(answer);

  //2. 뒷 4자리 잘라서 문자열 추가
  answer += phone_number.slice(phone_number.length - 4, phone_number.length);
  console.log(answer);
}

// 중간 문자 구하기
function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    answer = s.slice(s.length / 2, s.length / 2 + 1);
  }
  return answer;
}

// return num % 2 === 0 ? "Even" : "Odd"

// reduce를 이용한 숫자 평균 구하기
function solution(arr) {
  const answer = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return answer / arr.length;
}

let arr = [1, 2, 3, 4];
solution(arr);

// 가운데 문자 구하기
function solution2(s) {
  const center = Math.floor(s.length / 2);
  let answer = s[center];
  if (s.length % 2 === 0) {
    // 짝수 문자열일 경우에는 가운데 인덱스로부터
    //앞에 있는 인덱스의 문자까지 추가해서 리턴한다
    answer = s[center - 1] + answer;
  }
  return answer;
}

let b = "asdae";
let d = "asdxza";

solution2(d);

// 가운데 문자 삼항연산자로 구하기
function solution3(s) {
  const center = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[center] : s.slice(center - 1, center + 1);
}

solution3(b);

// 특정 문자 찾기

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      // return'김서방은 ' + i + '에 있다'
      return `김서방은 ${i}에 있다`;
    }
  }
}

// const x = seoul.indexOf("Kim")
// return `김서방은 ${x}에 있다`

// 원하는 요소 고르기

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) return false;
  }
  return true;
}

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  const answer = s.split("").filter((num) => {
    // 데이터가 숫자가 아닌 문자일 경우만 남긴다.
    // isNaN 의 결과가 true 값인 경우 (NaN 값인 경우)
    return isNaN(num) === true;
  });
  return answer.length === 0;
}

// 약수의 합

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 약수는 반으로 나누어서 사용 for문 최소화
function solution(n) {
  let answer = n;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// new Array는 빈 배열을 인덱스 값 만큼 만들어준다.
function solution(n) {
  let answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    return n % (cur + i) === 0
      ? //약수가 맞다면, 약수를 더한 값을 다음으로 넘격주고
        acc + (cur + i)
      : //약수가 아니라면, 더하지 않고 다음으로 넘겨준다
        acc;
  }, 0);

  return answer;
}

// 숫자 자릿수 더하기

function solution(n) {
  let answer = n
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return answer;
}

// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
solution(2, 5);

// map을 이용한 더하기
function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    return (num + i) * x;
    // return이 없다면 undefinde가 반환이 됨
    // new Array를 사용할 때 fill로 채워주면 배열의 요소를
  });
  return answer;
}

function solution(x, n) {
  let answer = [];
  for (let i = x; i <= x * n; i += x) {
    answer.push(i);
  }
  console.log(answer);
}

// reduce 기본설명
arr.reduce(function (acc, cur) {
  // 1번째 인자 : 누적값 (배열의 첫번째 요소)
  // 2번째 인자 : 현재값 (배열의 두번째 요소)
  // 누적값은 return으로 반복문을 넘겨줘야 값이 나온다.
  // 제일 마지막에 돌아가는 반복문이 결과값이 된다.
  // 초기값이 있는 경우에는 acc에 첫번째 요소가 아닌 초기값을 가진다.
  // 초기값이 있는 경우에 cur은 첫번째 요소를 가져오게 된다.
  console.log(acc, cur);

  return acc;
});

// 화살표함수형태
arr.reduce((acc, cur) => {}, 초기값);

// 기본형태
arr.reduce(function (acc, cur) {});

//문자열 내림차순으로 배치하기

function solution(s) {
  let answer = s.split("").sort();
  answer.reverse();
  return answer.join("");
}

a = "a";
b = "b";

// 아스키코드

// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.
// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소괸계를 비교

a.charCodeAt();
b.charCodeAt();
"z".charCodeAt();

// 알파벳 소문자의 유니코드
// 97 ~ 122

"A".charCodeAt();
"Z".charCodeAt();

// 알파벳 대문자의 유니코드
// 65 ~ 90

"A" > "a";
"a" > "Z";

function solution(a) {
  const answer = a
    .split("")
    .sort((a, b) => {
      return a > b ? 1 : -1;
    })
    .join("");
  return answer;
}
solution(a);

// k 번째 수
array = [1, 5, 2, 6, 3, 7, 4];
commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    answer.push(result[k - 1]);
  }
  return answer;
}

// map을 사용
function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    return result[el[2] - 1];
  });
  return answer;
}

array = [1, 5, 2, 6, 3, 7, 4];
commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    answer.push(result[k - 1]);
  }
  return answer;
}
// sort는 인자로 고차함수를 사용하지 않으면 첫번째 자리만 비교 한다
// 숫자를 사용할때는 b - a // 내림차순, a - b // 오름차순 => 문자열에서 작동하지않음

solution(array, commands);

// a > b ? -1 : 1 내림차순
// a > b ? 1 : -1 오름차순

// 문자열 내 p와 y의 개수

function solution(s) {
  let ppp = "";
  let yyy = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      ppp += s[i];
    } else if (s[i] === "y" || s[i] === "Y") {
      yyy += s[i];
    }
  }
  return ppp.length === yyy.length;
}

function solution(s) {
  let ppp = 0;
  let yyy = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      ppp++;
    } else if (s[i] === "y" || s[i] === "Y") {
      yyy++;
    }
  }
  return ppp === yyy;
}
// 소문자로 변경
function solution(s) {
  s = s.toLowerCase();
  let ppp = 0;
  let yyy = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      ppp++;
    } else if (s[i] === "y") {
      yyy++;
    }
  }
  return ppp === yyy;
}

// forEach 사용

function solution(s) {
  // p와 y 의 개수를 저장하는 객체
  const check = {};
  s.toLowerCase() // 1. 소문자로 변환
    .split("") // 2. 배열로 변환
    .forEach((str) => {
      // 3. 배열 메서드인 forEach사용
      check[str] === undefined // 객체에 해당 키값이 없는지 검증
        ? (check[str] = 1) // 없다면 초기값 1로 지정
        : check[str]++; // 있다면 기존 값에 1 더함
    });
  return check.p === check.y;
}

// 이상한 문자 만들기

function solution(s) {
  let answer = "";

  // 단어별로 인덱스를 구분하기 위한 변수
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백을 만났을 경우
      answer += s[i]; // " "
      idx = 0;
    } else {
      answer +=
        idx % 2 === 1
          ? s[i].toLowerCase() // 홀수일때는 소문자 변환해서 넣어준다
          : s[i].toUpperCase(); // 짝수일때는 대문자로 변형해서 넣어줌
      idx++;
    }
  }
  return answer;
}

// 맵을 이용

function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
// 자연수 뒤집어 배열로 만들기
// 내가 쓴거
function solution(n) {
  let answer = String(n).split("").reverse();
  let result = [];
  for (let i = 0; i < answer.length; i++) {
    result.push(Number(answer[i]));
  }
  return result;
}

function solution(n) {
  const answer = [];
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}
// 메서드를 사용
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}

// 나누어 떨어지는 숫자 판별

// 내가 쓴거
function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    } else if (arr.every((el) => el % divisor !== 0)) {
      answer.push(-1);
      break;
    }
  }
  return answer.sort((a, b) => {
    return a - b;
  });
}

function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 메서드 사용
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 콜라츠 추측
// 내가 쓴거
function solution(num) {
  let result = 0;
  let count = num;
  while (count !== 1) {
    if (count % 2 === 0) {
      count = count / 2;
      result++;
    } else if (count % 2 !== 0) {
      count = count * 3 + 1;
      result++;
    }
  }
  if (result >= 500) {
    return -1;
  }
  return result;
}
// for문 사용
function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      // 예외처리는 항사 상단에서
      break;
    }
    answer++;
    // num이 짝수일때 : 해당 수에 2를 곱한다.
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : answer;
}

// while 문 사용
function solution(num) {
  let answer = 0;
  // 조건식이 true 일 때만 반복 로직이 실행
  while (num !== 1) {
    // num 1일 될때까지 무한으로 실행한다.
    if (answer >= 500) {
      return -1;
    }

    answer++;
    num =
      num % 2 === 0
        ? num / 2 // 짝수일 경우
        : num * 3 + 1; // 홀수일 경우
  }
  return answer;
}

// reduce를 사용
function solution(num) {
  let answer = 0;

  const result = new Array(500).fill(1).reduce((acc) => {
    if (acc !== 1) {
      answer++;
      return acc % 2 === 0 ? acc / 2 : acc * 3 + 1;
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}

// 두개 뽑아서 더하기

function solution(numbers) {
  var answer = [];
  // 첫번째 반복문에서 가져오는 숫자는 첫번째 숫자로 기준을 잡는다.
  for (let i = 0; i < numbers.length; i++) {
    // 두번째 반복문에서 두번째 숙자를 기준을 잡는다.
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      if (answer.includes(sum) === false) answer.push(sum);
    }
  }
  return answer.sort((a, b) => a - b);
}

// new Set을 사용
function solution(numbers) {
  var answer = new Set();
  // 첫번째 반복문에서 가져오는 숫자는 첫번째 숫자로 기준을 잡는다.
  for (let i = 0; i < numbers.length; i++) {
    // 두번째 반복문에서 두번째 숙자를 기준을 잡는다.
    for (let l = i + 1; l < numbers.length; l++) {
      const sum = numbers[i] + numbers[l];

      answer.add(sum);
    }
  }
  return Array.from(answer).sort((a, b) => a - b);
  // return [...answer].sort((a,b) => a-b)  spread연산자
}

// forEach 사용
function solution(numbers) {
  const answer = new Set();

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;

      answer.add(sum);
    });
  });
  return [...answer].sort((a, b) => a - b);
}

// Set
// 1. 고유한 데이터만 받아올 수 있다. (중복되지 않는 데이터)
// 2. 겉은 배열 형태, 타입은 객체형태
// 3. 중복데이터를 자동으로 차단 시킴

// new
// 1. 뒤에 들어오는 데이터를 새로운 객체 형태로 리턴

// Array.isArray
// 1. 배열의 타입을 확인해주는 메서드
// 2. 불리언 값으로 반환함

// const arr = new Set()
// Array.isArray(arr) // false

// // 데이터 추가
// arr.add( 1 )
// arr.add( 2 )
// // set => 배열로 변
// // 1. Array.from
// const result = Array.from(arr)
// Array.isArray(result) // true

// // 2. spread
// const answer = [...arr]
// Array.isArray(answer // true)

// 데이터 반복
// arr.forEach(el => {
//   console.log(el)
// }) // result => 1 2

// 데이터 조회
// arr.has( 1 ) // true
// arr.has( 4 ) // false

// 데이터 삭제
// arr.delete( 1 ) // 불리언값을 반환하고 삭제되면 true
// arr.delete( 3 ) // 값이 없으면 false

// 데이터 초기화
// arr.clear()

// 두 정수 사이의 합

function solution(a, b) {
  let answer = 0;
  if (a < b || a === b) {
    for (let i = a; i < b + 1; i++) {
      answer += i;
    }
  } else if (a > b) {
    for (let i = b; i < a + 1; i++) {
      answer += i;
    }
  }
  return answer;
}

// 두 정수 사이의 합

function solution(a, b) {
  let answer = 0;
  if (a < b || a === b) {
    for (let i = a; i < b + 1; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i < a + 1; i++) {
      answer += i;
    }
  }
  return answer;
}

// 음양 더하기

// 내가 푼거
function solution(absolutes, signs) {
  let ff = 0;
  let tt = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      ff += absolutes[i];
    } else {
      tt += absolutes[i];
    }
  }
  return tt - ff;
}

// for문 사용
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    // answer += signs[i] ? absolutes[i] : -absolutes[i]  삼항연산자를 사용
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// reduce 사용
function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, index) => {
    return acc + (signs[index] ? cur : -cur);
  }, 0);
  return answer;
}

// 하샤드 수

// 내가 푼거
function solution(x) {
  let str = String(x);
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += Number(str[i]);
  }
  if (x % num === 0) {
    return true;
  } else {
    return false;
  }
}

// for문 사용
function solution(x) {
  let answer = 0;

  x = String(x);
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  return x % answer === 0; // 나머지 연산자로 인해 x가 자동으로 숫자타입으로 변형
}

// 메서드 사용
function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    });
  return x % answer === 0;
}

// 초기값을 0으로 주면 acc는 숫자타입이 된다.
function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return x % answer === 0;
}

// 내적
// 내가 푼거
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 리듀스 사용
function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}

// 제일 작은 수 제거하기
function solution(arr) {
  let answer = [];
  let aa = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== aa) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}

// for문 사용
function solution(arr) {
  const answer = [];

  // 1. 제일 작은 수를 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  // 2. 제일 작은 수를 제거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

// 메소드 사용
function solution(arr) {
  // 1. 제일 작은 수를 찾기
  const min = Math.min(...arr);

  // 2. 제일 작은 수를 제거
  const answer = arr.filter((num) => {
    return num !== min;
  });

  return answer.length === 0 ? [-1] : answer;
}

// 행렬의 덧셈

function solution(arr1, arr2) {
  const answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      const sum = arr1[i][l] + arr2[i][l];

      if (answer[i] === undefined) {
        answer[i] = [];
      }

      answer[i][l] = sum;
    }
  }
  return answer;
}

// map을 사용
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    const result = num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
    return result;
  });
  return answer;
}

// 요일 구하기

const month = {
  1: 31,
  2: 29,
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
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = 0;
  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1; // 당일을 제외

  return week[answer % 7];

  // reduce 사용

  function solution(a, b) {
    const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
      const mn = cur + i;
      return acc + (mn !== a ? month[mn] : b - 1);
    }, 0);
    return week[answer % 7];
  }
}

// const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}

// 최대공약수와 최소공배숙 구하기
function solution(n, m) {
  // 최대공약수 : 두개의 수의 약수 중에서 (공통되는) 제일 큰 수
  // 최소공배수 : 두갱의 수의 배수 중에서 (공통된는) 제일 작은 수
  const biggest = Math.max(n, m);

  // 최대공약수 구하기
  let max = 0;
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  // 최소공배수 구하기
  let min = 0;
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }

  return [max, min];
}

function solution(n, m) {
  // 유클리드 호제법
  // - 최대공약수를 구하기 위한 알고리즘 (공식)
  // a를 b로 나웠을 때 (a,가 b보다 클 경우) = 큰 수에서 작은 수를 나눴을 때

  // 나머지 값이 0이 되면, 작은 수(b가 큰 수(a)가 되고,
  // 나머지 값이 0이 되지 않으면, 작은 수 (b)가 큰 수(a)가 되고,
  // 나머지 값이 작은 수 (b)가 된다.
  // 위의 방식을 반복했을 때 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.
  let a = Math.max(n, m); // 큰 수
  let b = Math.min(n, m); // 작은 수
  let r = 0; // 나머지 값

  while (a % b > 0) {
    r = a % b;
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에 나머지 값 할당
  }
  // 최소공배수는 두 수(n,m) 곱한 값에 최대공약수를 나눈 값
  return [b, (n * m) / b];
}

// 완주하지 못한 선수

// 내가 푼거 - 효율문제로 오답
// 만약 완주하지 못한 모든 사람을 배열로 담아 리턴하여야 한다면 빈배열에 푸시만 해주면 이 방법 또한 가능
function solution(participant, completion) {
  let result = {}; // 빈 객체 선언
  for (let i = 0; i < participant.length; i++) {
    // 객체에 값이 있다면 + 1 // 즉 참가자 있다면 + 1
    if (result[participant[i]]) {
      result[participant[i]] = result[participant[i]] + 1;
      // 객체가 undefined 이면 + 1 // 즉 참가자가 없다면 참가자 0 + 1
    } else {
      result[participant[i]] = 0 + 1;
    }
  }
  for (let i = 0; i < completion.length; i++) {
    // 객체에 값이 있다면 -1  // 즉 완주자일 경우 -1
    if (result[completion[i]]) {
      result[completion[i]] = result[completion[i]] - 1;
    }
  }
  for (let i = 0; i < Object.values(result).length; i++) {
    // 객체에 value가 1과 같다면 객체에 key를 answer에 담아줌 // 즉 완주하지 못하여 -1이 안되었을 경우
    if (Object.values(result)[i] === 1) {
      return Object.keys(result)[i];
    }
  }
}

// sort를 이용
// 단 한사람만을 리턴하는 거기 때문에 가능
function solution(participant, completion) {
  let aaa = participant.sort();
  let bbb = completion.sort();

  for (let i = 0; i < aaa.length; i++) {
    if (aaa[i] !== bbb[i]) {
      return aaa[i];
    }
  }
}

// slice 사용 효율성 때문에 오답
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}

// 객체에 담아서 리턴
function solution(participant, completion) {
  const answer = {};
  // 1. 참가한 선수의 이름과 참가자 수를 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }

  // 2. 완주한 명단에서 선수 이름을 제거
  for (let i = 0; i < completion.length; i++) {
    if (answer[completion[i]]) {
      answer[completion[i]]--;
    }
  }
  // 3. 완주하지 못한 선수의 이름을 리턴
  for (let key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
}

// filter 메소드를 사용
function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}

// 수포자 찍신 찾기

// 수포자의 찍기 규칙
const answerTable = [
  // 1번 수포자
  [1, 2, 3, 4, 5],
  // 2번 수포자
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const answer = [0, 0, 0];

  // 정답의 길이만큼 반복
  for (let i = 0; i < answers.length; i++) {
    // 수포자의 사람수 만큼 반복
    for (let l = 0; l < answerTable.length; l++) {
      // 수포자 테이블에 인덱스로 접근하고 정답의 길이와 수포자의 규칙을 나눈 나머지가 정답의 인덱스 값과 같다면
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        // 점수를 저장
        answer[l]++;
      }
    }
  }
  const biggest = Math.max(...answer);
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === biggest) {
      result.push(i + 1);
    }
  }
  return result;
}

// 메서드 사용
function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    // 찍은 번호가 정답과 일치하는지 확인하고 학생들의 점수를 합산
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score: score };
  });
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );

  return scoreList
    .filter((el) => {
      return el.score === biggest;
    })
    .map((el) => el.student);
}

// 폰켓몬
// 내 푼거
function solution(nums) {
  let answer = [];
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]] === undefined) {
      result[nums[i]] = 1;
    } else {
      result[nums[i]] = result[nums[i]] + 1;
    }
  }

  for (let i = 0; i < Object.keys(result).length; i++) {
    if (answer[i] === undefined) {
      answer.push(Object.keys(result)[i]);
    }
  }
  if (answer.length > nums.length / 2) {
    return nums.length / 2;
  }
  return answer.length;
}

function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (answer.length < nums.length / 2 && answer.includes(nums[i]) === false) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// new Set을 사용
function solution(nums) {
  const answer = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (answer.size < nums.length / 2) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

// new Set과 forEach를 사용
function solution(nums) {
  const answer = new Set([]);

  nums.forEach((monster) => {
    if (answer.size < nums.length / 2) {
      answer.add(monster);
    }
  });
  return answer.size;
}

//
function solution(nums) {
  const answer = new Set(nums).size;
  const limit = nums.length / 2;
  if (limit > answer) {
    return answer;
  }
  return limit;
}

// 피보나치 수열

function solution(n) {
  // 피보나치 수열들을 저장하는 배열
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}

// reduce를 사용
function solution(n) {
  // 0번째 피보나치 수의 결과
  let prev = 0;
  // 1번째 피보나치 수의 결과
  let next = 1;
  // 2번째 피보나치 수의 결과
  let sum = prev + next;

  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;
    return sum;
  }, sum);
  return answer;
}

// 숫자 문자열과 영단어

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// rplaceAll을 안쓰고 같은 기능
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

// 문자 기준으로 자르고 인덱스를 넣어줌
function solution(s) {
  numbers.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}

// 정규표현식 사용
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    // 정규표현식에는 변수가 들어갈수 없기 떄문에 아래와 같이 변수가 들어갈 수 있게 해주는 new RegExp를 사용
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}

// 체육복 빌리기

function solution(n, lost, reserve) {
  const losted = [...lost]; // lost 데이터가 필터 되기 이전에 데이터를 저장한다.
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

// reduce 사용
function solution(n, lost, reserve) {
  const losted = [...lost]; // lost 데이터가 필터 되기 이전에 데이터를 저장한다.
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  return lost.reduce((acc, cur) => {
    // 앞에 학생이 체육복을 가지고 있는지
    const prev = reserve.indexOf(cur - 1);
    // 뒤에 학생이 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);

    if (prev !== -1) {
      // 앞에 있는 학생이 여벌 체육복이 있다면
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, answer);
}

// 시저 암호

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; // " "
    } else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25
          ? alphabet.substring(26) // 대문자에 해당하는 문자열을 자름
          : alphabet.substring(0, 26); // 소문자에 해당하는 문자열을 자름
      idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// 대, 소문자를 자르고 시작
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; // " "
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// reduce 사용
function solution(s, n) {
  let answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    // if(word[idx] === undefined) {
    if (idx >= 26) {
      idx -= 26;
    }
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
  return answer;
}

// 아스키 코드 사용
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let idx = s[i].charCodeAt() + n;
    if (idx > 122 || (idx > 90 && idx - n < 97)) {
      // 소문자 z(122)를 넘어가거나
      // 대문자 Z(90)를 넘어가면서 소문자를 넘어가지 않을 때
      idx -= 26;
    }
    answer += String.fromCharCode(idx);
  }
  return answer;
}

// 실패율

// 객체에 담아서 저장
function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);
  const infos = [];
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, // 현재 스테이지 번호
      users: 0, // 해당 스테이지를 클리어하지 못한 유저 수
      fail: 0, // 스테이지의 실패율
    });
  }

  let allUsers = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;

      // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않을 때
      // 현재 스테이지의 유저의 합산이 완료되는 시점
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;

        infos[stages[i] - 1].fail = fail;
      }
    }
  }
  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => {
      return el.stage;
    });
}

// 새로운 배열을 만들어서 리턴
function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);

  let allUsers = stages.length;

  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;

      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );

      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
  return answer;
}

// 예산

// 배열을 사용
function solution(d, budget) {
  const answer = [];

  // 부서가 신청한 금액을 오름차순 형태로 정렬
  d.sort((a, b) => a - b);

  // 부서가 신청한 금액을 오름차순 형태로 정렬
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

// while을 사용
function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0;
  while (budget - d[answer] >= 0) {
    budget -= d[answer];
    answer++;
  }
  return answer;
}

// filter를 사용
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((money) => {
      // 총 예산에서 지원금을 삭감
      budget -= money;
      return budget >= 0;
    }).length;
}

// 크레인 인형뽑기

function solution(board, moves) {
  let answer = 0;
  const bucket = [];
  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    // 2. 크레인이 이동해서 뽑을수 있는 인형의 위치값
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어줌
        board[l][moves[i] - 1] = 0;

        // 바구니에 넣으려고 하는 인형이 바구니의 마지막 데이터와 동일한지
        if (doll === bucket[bucket.length - 1]) {
          answer += 2;
          bucket.pop();
          break;
        }
        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

// forEach 메서드
function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    let stop = false;

    board.forEach((location) => {
      const doll = location[move - 1];
      if (stop === false) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (doll === bucket[bucket.length - 1]) {
            answer += 2;
            bucket.pop();
          } else {
            bucket.push(doll);
          }

          stop = true;
        }
      }
    });
  });
  // console.log(bucket)
  return answer;
}

// 3진법 구하기

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

function solution(n) {
  n = n.toString(3);
  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}

// 이진 변환 반복하기

function solution(s) {
  let count = 0; // "1"이 나올때까지 시도한 횟수
  let remove = 0; // "0"을 제거한 총 횟수

  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    const num = temp.length;
    s = num.toString(2);
  }
  return [count, remove];
}

// 재귀함수 사용

function solution(s) {
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") {
      return [count, remove];
    }
    count++;

    // "0" 제거하고, 숫자 카운트
    remove += s.split("").filter((el) => el === "0").length;
    // "1"만 남긴다
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);

    return recursion();
  }

  return recursion();
}

// 1차 비밀지도

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";

    const map1 = arr1[i].toString(2).padStart(n, "0");

    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}

function solution(n, arr1, arr2) {
  return arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");

    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1.split("").reduce((acc, cur, i) => {
      return acc + (cur === "1" || map2[i] === "1" ? "#" : " ");
    }, "");
  });
}

// 다트 게임

const isBonus = ["S", "D", "T"]; // 보너스를 구분하기 위한 배열

function solution(dartResult) {
  let score = ""; // 문자열에 있ㄴ느 점수 데이터를 저장
  let currentScore = 0; // 현재 게임(턴)의 점수를 저장
  let stop = false; // 점수를 최종 저장할 시점을 찾음

  return dartResult
    .split("")
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        score += cur;
        stop = false; // 새 게임이 시작된 경우는 stop을 초기화
      } else if (isBonus.includes(cur)) {
        score = Number(score);
        const squared = isBonus.indexOf(cur) + 1;

        currentScore = score ** squared;
        score = "";

        // 다음 데이터가 숫자인 경우 즉 옵션이 아닌경우
        // 마지막 데이터 체크해서 게임을 무조건 종료
        if (isNaN(dartResult[i + 1]) === false || i + 1 === dartResult.length) {
          stop = true;
        }
      } else {
        // 옵션 처리
        stop = true;

        if (cur === "#") {
          // 아차상이라면
          currentScore *= -1;
        } else {
          // 스타상이라면
          currentScore *= 2;

          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        }
      }

      if (stop) {
        acc.push(currentScore);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur);
}
