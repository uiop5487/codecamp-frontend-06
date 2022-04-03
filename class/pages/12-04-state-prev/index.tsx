import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);

    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}>카운트증가</button>
    </div>
  );
};

export default StatePrevPage;

// import { useState } from "react";

// const StatePrevPage = () => {
//   const [count, setCount] = useState(0);

//   const onClickCount = () => {
//     setCount(count + 1);

//     setCount(count + 1);

//     setCount(count + 1);

//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <div>현재카운트: {count}</div>
//       <button onClick={onClickCount}>카운트증가</button>
//     </div>
//   );
// };

// export default StatePrevPage;
