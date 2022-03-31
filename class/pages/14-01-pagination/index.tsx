import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
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

const MyPage = styled.span`
  padding-left: 100px;
  cursor: pointer;
`;

const MapBoardPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          {/* <MyColumn></MyColumn> */}
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
      {new Array(100).fill(1).map((_, index) => (
        <MyPage key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </MyPage>
      ))}
      {/* 
      <MyPage onClick={onClickPage} id="2">
        2
      </MyPage>
      <MyPage onClick={onClickPage} id="3">
        3
      </MyPage> */}
    </div>
  );
};

export default MapBoardPage;
