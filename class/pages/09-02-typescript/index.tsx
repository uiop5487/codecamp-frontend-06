export default function TypescriptPage() {
  // 자동으로 처음 들어간 값으로 추론이 된다.
  // 이거를 '타입추론' 이라고 함
  let aaa = "안녕하세요";
  aaa = "asdasd";

  // aaa = 3; => error!!
  // 타입명시
  let bbb: string = "반갑습니다";

  // 문자타입
  let ccc: string;
  ccc = "반가워요";
  // ccc = 3; => error!!

  // 숫자타입
  let ddd: number = 10;
  // ddd = "asdasd" => error!!

  // 불린타입
  let eee: boolean = true;
  eee = false;
  // eee = "false" => error!!(채워진 문자열이여서 true로 작동함)

  // 배열타입
  // 숫자만 들어오는 배열
  let fff: number[] = [1, 2, 3, 4, 5];

  // 문자만 들어오는 배열
  let ggg: string[] = ["철수", "영희", "훈이"];

  // 문자 또는 숫자가 들어오는 배열 타입스크립트에서는 |, & 하나씩 써서 사용
  let hhh: (number | string)[] = ["철수", "훈이", 11];

  // 객체타입 - 타입이 추론이 된다. 타입을 명시해주면 키, 밸류가 없어도 에러가 나온다.
  // 키에 ?를 붙여주면 있어도 되고 없어도 된다.
  interface IProfile {
    name: string;
    age: string | number;
    school: string;
    hobby?: string;
  }

  let profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  profile.age = "8살";
  // profile.school = 1 => error!!

  // 함수타입
  const add = (money1: number, money2: number, unit: string): string => {
    return money1 + money2 + unit;
  };
  const result = add(1000, 2000, "원");
  // return <div>타입스트립트 연습</div>;
}
