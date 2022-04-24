// 1. HOF - 일반타입
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const answer1 = firstFunc1("영희")(8);
console.log(answer1);

// 2. HOF - any타입
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const answer2 = firstFunc2("영희")(8);
console.log(answer2);

// 3. HOF - generic 타입
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const answer3 = firstFunc3("영희")(8);
console.log(answer3);

// 4. HOF - generic 타입 화살표 함수
const firstFunc4 =
  <T>(arg1: T) =>
  <U>(arg2: U) => {
    return [arg1, arg2];
  };

const answer4 = firstFunc4("영희")(8);
console.log(answer4);

// 5. HOF - generic 타입 컴포넌트의 응용 - HOC
const withAuth =
  <C>(Component: C) =>
  <P>(props: P) => {
    return [Component, props];
  };

export default withAuth("Bbb컴포넌트")({ aaa: "철수" });
// console.log(answer5);
