import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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

const MapBoardPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(-1);

  const onClickEdit = (event) => {
    setMyIndex(Number(event.target.id));
  };

  console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
          <MyRow key={el._id}>
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <button onClick={onClickEdit} id={index}>
              수정
            </button>
          </MyRow>
        ) : (
          <div>수정하기 화면입니다!!!!!</div>
        )
      )}
    </div>
  );
};

export default MapBoardPage;
