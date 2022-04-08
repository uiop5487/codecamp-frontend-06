import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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
  text-align: center;
  cursor: pointer;
`;

const SearchDebouncingPage = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  // const [search, setSearch] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 400); // 시간 입력

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <div>
      검색어입력: <input type="text" onChange={onChageSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <MyPage key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </MyPage>
      ))}
    </div>
  );
};

export default SearchDebouncingPage;
