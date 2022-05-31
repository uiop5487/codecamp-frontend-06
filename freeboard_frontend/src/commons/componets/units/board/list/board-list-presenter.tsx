import * as s from "./board-list-styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardListUIProps } from "./board-list-typescript";
import Pagination from "../../../commons/pagination/pagination";
import SearchContainer from "../searchbar/search.container";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../../types/generated/types";

const WriteBoardListPresenter = (props: IBoardListUIProps) => {
  return (
    <s.BackGround>
      <s.Warrper>
        <SearchContainer
          onChageSearch={props.onChageSearch}
          onChangeEndDate={props.onChangeEndDate}
          onChangeStartDate={props.onChangeStartDate}
          onClickDateSearch={props.onClickDateSearch}
        />
        <s.BoardListWarrper>
          <s.BoardList>
            <s.BoardListTilte>
              <s.BoardListBasicTitle>번호</s.BoardListBasicTitle>
              <s.BoardListTitleName>제목</s.BoardListTitleName>
              <s.BoardListBasicTitle>작성자</s.BoardListBasicTitle>
              <s.BoardListBasicTitle>날짜</s.BoardListBasicTitle>
            </s.BoardListTilte>
            {props.data?.fetchBoards.map((el: IBoard, index: number) => (
              <s.BoardListDetail key={uuidv4()}>
                <s.BoardListBasicName>
                  {props.data ? props.data.fetchBoards?.length - index : index}
                </s.BoardListBasicName>
                <s.BoardListDetailName
                  onClick={props.onClickMoveToPage(`/boards/new/${el._id}`)}
                  id={el._id}
                >
                  {el.title}
                </s.BoardListDetailName>
                <s.BoardListBasicName>{el.writer}</s.BoardListBasicName>
                <s.BoardListBasicName>
                  {getDate(el.createdAt)}
                </s.BoardListBasicName>
              </s.BoardListDetail>
            ))}
          </s.BoardList>
        </s.BoardListWarrper>
        <s.FooterWrapper>
          <s.CenterButton></s.CenterButton>
          <Pagination refetch={props.refetch} countdata={props.countdata} />
          <s.SubmitButton onClick={props.onClickMoveToPage("/boards/new")}>
            게시글 작성
          </s.SubmitButton>
        </s.FooterWrapper>
      </s.Warrper>
    </s.BackGround>
  );
};
export default WriteBoardListPresenter;
