import { useCallback, useMemo, useState } from "react";
import MomoizationPresenterPage from "./presenter";

export default function MomoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 의존성 배열의 값이 변경되거나 실행이 될때 메모한 값도 변경이 된다.
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  //   const onClickCountState = useCallback(() => {
  //     // console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   }, []);

  // useMemo로 useCallbac 만들어보기
  const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <div>
      <div>=========================</div>
      <h1>이것은 컨테이너 입니다!!</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기!!</button>
      <div>=========================</div>
      <MomoizationPresenterPage countState={countState} />
    </div>
  );
}
