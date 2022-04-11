import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // 1. 화살표 함수로 사용
    setCount((prev) => prev + 1);

    // 2. 함수선언식으로 사용
    setCount(function (prev) {
      return prev + 1;
    });

    // 3. 매개변수 바꾸기
    setCount((aaa) => aaa + 1);
  };

  return (
    <div>
      <div>현재 카운트: {count} </div>
      <button onClick={onClickCount}>카운트 증가!!</button>
    </div>
  );
};

export default StatePrevPage;
