export default function TypescriptPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입
  type Mytype1 = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 지정한 타입만 제거
  type Mytype2 = Omit<IProfile, "school">;

  // 3. Partial 타입 모든 값에 물음표를 추가
  type Mytype3 = Partial<IProfile>;

  // 4. Required 타입 모든 값을 필수로 바꿔줌
  type Mytype4 = Required<IProfile>;

  // 5. Record 타입 처음에 정해놓은 값만 들어갈수 있게 해준다.
  type ZZZ = "aaa" | "qqq" | "rrr"; // Union 타입
  // let apple: ZZZ
  // apple = "aaa"

  type Mytype5 = Record<ZZZ, IProfile>;

  // ============= 추가(선언병합) ===============
  // interfaces는 같은 이름을 여러개 가질수 있고 이름이 같을때 자동으로 합쳐짐
  interface IProfile {
    candy: number;
  }

  let profile: IProfile;
  profile = {
    candy: 3,
    age: 10,
    hobby: "asdqwee",
  };

  return <div>타입스트립트 연습</div>;
}
