const MapElPage = () => {
  // return을 해줌
  // ["철수", "영희", "훈이"].map((el) => el + "어린이");
  // return이 안되고 실행만 되고 끝남
  // ["철수", "영희", "훈이"].forEach((el) => el + "어린이");

  console.log("======기존의 방식========");
  // 1. 기본방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  console.log("======매개변수 바꾸기========");
  // 2. 매개변수 바꾸기
  ["철수", "영희", "훈이"].forEach((aaa, bbb) => {
    console.log("aaa:", aaa);
    console.log("bbb:", bbb);
  });

  console.log("=======함수선언식 방법=======");
  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (ccc, ddd) {
    console.log("ccc:", ccc);
    console.log("ddd:", ddd);
  });

  console.log("=======el과 index 바꾸기=======");
  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  return <div>el 알아보기</div>;
};

export default MapElPage;
