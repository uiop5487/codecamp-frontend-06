import axios from "axios";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      console.log(res);
      const num = res.target.response.split(" ")[0];
      const bbb = new XMLHttpRequest();
      bbb.open("get", `https://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const UserId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `https://koreanjson.com/posts?userId=${UserId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종결과값
        });
      });
    });
  };

  //   new Promise((resolve, reject) => {
  //     // 외부 요청 코드
  //     // 성공
  //         resolve("철수")

  //     // 실패
  //     reject()
  //   }).then[Symbol]((res) => {}).catch(err => {})

  const onClickPromise = () => {
    console.log("여기는 1번 입니다.");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번 입니다");
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번 입니다");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번 입니다");
        console.log(res);
      });
    console.log("여기는 5번 입니다");
  };

  const onClickAcsyncawait = async () => {
    // const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    // const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
    // const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };

  return (
    <div>
      <button onClick={onClickCallback}>콜백 요청</button>
      <button onClick={onClickPromise}>프로미스 요청</button>
      <button onClick={onClickAcsyncawait}>어웨이트 요청</button>
    </div>
  );
}
