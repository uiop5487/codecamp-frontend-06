// import { useState } from "react";

// 1. 문자 타입
const getString = (args: string): string => {
  return args;
};

const result1 = getString("철수");

console.log(result1);

// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};

const result2 = getNumber(3);

console.log(result2);

// 3. any 타입
const getAny2 = (args: any): any => {
  return args;
};

const result3A1 = getAny2("철수");
const result3A2 = getAny2(5);
const result3A3 = getAny2(true);

console.log(result3A1, result3A2, result3A3);

// 4. get 타입2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys("철수", 10, "다람쥐초등학교");
console.log(result4);

// 5. generic 타입
// 무슨타입인지는 모르지만 들어온 타입을 그대로 사용 가능
// 여기서 의미하는 마이타입은 3개가 같은 것이다.
// 제네릭은 어떤 타입이 들어와도 같은 타입으로 사용 가능하다
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = "철수";
const bbb: number = 5;
const ccc: boolean = true;

const result5A1 = getGeneric(aaa);
const result5A2 = getGeneric(bbb);
const result5A3 = getGeneric(ccc);

console.log(result5A1, result5A2, result5A3);

// 6. genric 타입2
function getGenerics<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", 10, "다람쥐초등학교");

console.log(result6);

// 7.generic - 축약1
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenericsT("철수", 10, "다람쥐초등학교");

console.log(result7);

// 8.generic - 축약2
// function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
//   return [arg3, arg2, arg1];
// }

// 화살표 함수로 작성
const getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

// 타입을 직접 명시
const result8 = getGenericsTUV<string, number, string>(
  "철수",
  10,
  "다람쥐초등학교"
);

console.log(result8);

// 타입을 명시
const apple: number = 3;

console.log(apple);

// useState에서의 generic
// const [school, setSchool] = useState<string>("다람쥐초등학교")
