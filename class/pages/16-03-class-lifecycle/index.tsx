import { Component, createRef } from "react";
import Router from "next/router";

export default class CounterPage extends Component {
  // 클래스에는 ref라는게 존재함 태그를 변수에 넣어가지고 다닌다고 생각하면 됨
  // aaa에 태그를 담는다고 생각하면 됨
  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };

  // 렌더되고 나서 딱 한번만 실행
  // 화면에 그림이 다 그려지고나서 포커스를 깜빡깜빡하게 해줄때 사용 가능
  componentDidMount() {
    console.log("마운트!!!!!!!!!!!");
    this.inputRef.current?.focus();
  }

  // 렌더될때 마다 실행
  // 처음에는 실행 안됨
  componentDidUpdate() {
    console.log("수정되고 다시그려짐!!!!");
  }

  // 컴포넌트가 사라지고 나서 실행이 됨
  // 채팅방 나가기
  // 여기에 api요청을 해주면 나가기 버튼이 아니고 다른방법으로 나가도 api요청이 됨
  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!!!!!");
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: any) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    // 컴포넌트를 상속하게 되면 가져올수 있게 된다.
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트{this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>
          !!카운트 올리기!!
        </button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
