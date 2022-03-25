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
