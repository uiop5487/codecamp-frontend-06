export default function PromiseAllPage() {
  // 하나하나씩 확인하는 방법
  const onClickPromise = async () => {
    console.time("프로미스 시작!");
    // resolve는 실행완료, reject는 에러
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("프로미스 시작!");
  };

  // 한번에 확인하는 방법
  const onClickPromiseAll = async () => {
    console.time("프로미스 올 시작!");

    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("프로미스 올 시작!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>프로미스 연습하기</button>
      <button onClick={onClickPromiseAll}>프로미스 올 연습하기</button>
    </div>
  );
}
