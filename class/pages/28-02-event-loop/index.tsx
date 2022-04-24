export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("===========사작?===========");

    setTimeout(() => {
      console.log("1초 뒤에 실행됨");
    }, 1000);

    // 1초가 지나더라도 이 로직이 끝나야 setTimeout이 실행이 됨]
    // 콜스택과 테스크큐로 인해 이런 결과가 나옴
    let sum = 0;
    for (let i = 0; i <= 9000000000; i += 1) {
      sum = sum + 1;
    }

    console.log("===========끝?===========");
  };

  return <button onClick={onClickTimer}>setTiomeout 실행시키기!</button>;
}
