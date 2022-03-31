import { useState } from "react";
import Child1Page from "../../src/componets/units/board/14-lifting-state-up/child1";
import Child2Page from "../../src/componets/units/board/14-lifting-state-up/child2";

const LiftingStateUpPage = () => {
  const [count, setCount] = useState(0);

  // 방법 - 1
  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1Page count={count} setCount={setCount} />
      <div>================================</div>
      <Child2Page count={count} onClickCount={onClickCount} />
    </div>
  );
};

export default LiftingStateUpPage;
