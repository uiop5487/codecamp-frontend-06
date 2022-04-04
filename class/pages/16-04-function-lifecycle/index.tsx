import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const router = useRouter();
  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  // 1. didMount
  // componentDidMount() {
  //   console.log("마운트!!!!!!!!!!!");
  //   this.inputRef.current?.focus();
  // }

  // useEffect(() => {
  //   console.log("마운트됨!!");
  //   inputRef.current?.focus();
  // }, []);

  // 2. didUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!!");
  // }
  // 처음부터 실행 됨
  useEffect(() => {
    console.log("수정되고 다시 그려짐");
  });

  // 3. WillUnmiunt
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!!!!!");
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!!!!!");
  //   };
  // }, []);

  // 4. DidMount와 WillunMount를 합침
  useEffect(() => {
    console.log("마운트됨!!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!!!!!");
    };
  }, []);

  // 5. useEfect에 잘못된 사용 예()

  // 5.1 추가 렌더링
  // setState를 사용하면 렌더링이 한번 더 되기 때문에 가급적이면 setState를 사용을 자제해야 한다.
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  // 5.2 무한루프
  // 이전값이 계속 바뀌면서 렌더가 되기 때문에 무한루프에 빠지게 된다.
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    // console.log(this.state.count);
    // this.setState((prev: any) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  // 실행순서는 마운트되고 나서 즉 렌더가 모두 되고나서 실행이 되기 때문에 이 콘솔은 가장 먼저 찍히게 된다.
  console.log("나는 언제 실행되니?");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트{count}</div>
      <button onClick={onClickCounter}>!!카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
