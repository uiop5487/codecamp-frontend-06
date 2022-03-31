import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = (event: any) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (event: any) => {
    if (startPage + 10 >= lastPage) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
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
      <MyPage onClick={onClickPrevPage}>이전 페이지</MyPage>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <MyPage
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {index + startPage}
          </MyPage>
        ) : (
          <span></span>
        )
      )}
      <MyPage onClick={onClickNextPage}>다음 페이지</MyPage>
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
