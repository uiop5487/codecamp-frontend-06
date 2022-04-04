import { Component } from "react";

export default class CounterPage extends Component {
  // state라는 이름이 있음 마음대로 이름을 바꾸지 못함 class라는 것가 상관없이 컴포넌트로 확장했기에 사용할수 있는거임
  state = {
    count: 0, // 이러면 카운트라는 스테이트가 만들어진거임
  };

  // 화살표 함수를 사용하면 동적스코프가 되지 않고 this가 윈도우의 this가 되므로 여기서는 우리가 원하는 컴포넌트의 this가 된다.
  onClickCounter = () => {
    console.log(this.state.count);
    // setState 또한 컴포넌트에 내장되어 있는 기능임 따로 선언해주지 않아도 사용가능하고 컴포넌트로 확장해주지 않으면 사용불가이다.
    // this의 작동원리는 누가 이것을 작동시켰는지가 중요함
    this.setState((prev: any) => ({
      count: prev.count + 1,
    }));
  };

  aaa() {
    // 이런식으로 우리가 만들어서 사용할 수 있음 직접 만들었기에 이름을 마음대로 해도 된다.
  }

  render() {
    // 이것 또한 리액트에서 제공해주는 컴포넌트의 기능을 사용하는거임 원래 클래스에는 이런 기능이 없음
    return (
      // 화면에 그려지는 부분
      <div>
        {/* 스테이트를 사용하게 되면 this가 나오게 되는데 이때 이 this는 클래스 컴포넌트 그 자체라고 생각하면 됨 */}
        <div>현재카운트{this.state.count}</div>
        {/* bind를 사용하면 현재 함수와 바인딩 되기 때문에, 즉 사용하는 함수의 this가 되기때문에 화살표 함수가 아니더라도 this를 지정할수 있다. */}
        <button onClick={this.onClickCounter.bind(this)}>
          !!!!!!!!!!!카운트 올리기!!!!!!!!!!!!
        </button>
      </div>
    );
  }
}

// 클래스라는게 원래 컴포넌트가 아님
// 클래스는 객체지향프로그램 만들때 묶을 만드는거임
// 컴포넌트로 사용하고 싶으면 extends라는게 있는데 확장하는거임 Component로 확장해주는거임
// 이렇게 사용하면 컴포넌트 기능을 가진 클래스가 되는거임
