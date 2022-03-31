import Board from "../../src/componets/units/board/14-board-pagination/Board";
import Pagination from "../../src/componets/units/board/14-board-pagination/pagination";
import { useQuery, gql } from "@apollo/client";
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

const MapBoardPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  return (
    <>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
};

export default MapBoardPage;
