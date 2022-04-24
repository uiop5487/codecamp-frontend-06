import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const BasketPage = () => {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    // 로컬에는 텍스트만 들어감
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = basket.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length) {
      alert("이미 담으신 물품입니다!");
      return;
    }
    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    basket.push(newEl);
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </MyRow>
      ))}
    </div>
  );
};

export default BasketPage;
