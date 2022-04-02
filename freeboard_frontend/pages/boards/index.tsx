import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import BestBoards from "../../src/commons/componets/units/board/bestboard/bestboardpresenter";
import WriteBoardListContainer from "../../src/commons/componets/units/board/list/board-list-container";
import NewButton from "../../src/commons/componets/units/board/newboardbutton/button";

import Pagination from "../../src/commons/componets/units/pagination/pagination";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
      createdAt
    }
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 1200px; */
  padding-bottom: 50px;
`;

const Box = styled.div`
  width: 171px;
`;

const WriteBoardList = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: countdata } = useQuery(FETCH_BOARDS_COUNT);
  return (
    <div>
      <BestBoards />
      <WriteBoardListContainer data={data} />
      <FooterWrapper>
        <Box></Box>
        <Pagination refetch={refetch} countdata={countdata} />
        <NewButton />
      </FooterWrapper>
    </div>
  );
};

export default WriteBoardList;
