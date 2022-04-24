// 1. any 타입 (그냥 자바스크립트랑 같음)
const getAny = (args: any) => {
  return args + 2;
};

getAny("철수");
// const result1 = getAny("철수");

// 2. unknown 타입
// 모르는 데이터가 있으면 왠만하면 언노운으로 지정해서 타입을 선언
// 타입을 지정해주면 결과 예측이 가능해짐
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요";
  }
};
getUnknown("철수");
// const result2 = getUnknown("철수");
