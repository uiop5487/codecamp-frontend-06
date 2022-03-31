import * as s from "./board-list-styles";
import { getDate } from "../../../commons/libraries/utils";
import { BoardListEl, IBoardListUIProps } from "./board-list-typescript";

const WriteBoardListPresenter = (props: IBoardListUIProps) => {
  return (
    <s.BackGround>
      <s.Warrper>
        <s.Title>베스트 게시글</s.Title>

        <s.BoxWarrper>
          <s.Box></s.Box>
          <s.Box></s.Box>
          <s.Box></s.Box>
          <s.Box></s.Box>
        </s.BoxWarrper>
        <s.SearchWarrper>
          <s.SearchBox></s.SearchBox>
          <s.YearBox></s.YearBox>
          <s.SearchButton>검색하기</s.SearchButton>
        </s.SearchWarrper>
        <s.BoardListWarrper>
          <s.BoardList>
            <s.BoardListTilte>
              <s.BoardListBasicTitle>번호</s.BoardListBasicTitle>
              <s.BoardListTitleName>제목</s.BoardListTitleName>
              <s.BoardListBasicTitle>작성자</s.BoardListBasicTitle>
              <s.BoardListBasicTitle>날짜</s.BoardListBasicTitle>
            </s.BoardListTilte>
            {props.data?.fetchBoards.map((el: BoardListEl, index: number) => (
              <s.BoardListDetail key={el._id}>
                <s.BoardListBasicName>
                  {props.data.fetchBoards.length - index}
                </s.BoardListBasicName>
                <s.BoardListDetailName
                  onClick={props.onClickMoveDetail}
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
        <s.FooterWrapperCenter>
          <s.FooterWrapper>
            <s.FooterNumber>
              <s.FooterNumberText>&lt;</s.FooterNumberText>
              <s.FooterNumberText>1</s.FooterNumberText>
              <s.FooterNumberText>2</s.FooterNumberText>
              <s.FooterNumberText>&gt;</s.FooterNumberText>
            </s.FooterNumber>
            <s.SubmitButton onClick={props.onClickMoveNew}>
              게시글 작성
            </s.SubmitButton>
          </s.FooterWrapper>
        </s.FooterWrapperCenter>
      </s.Warrper>
    </s.BackGround>
  );
};
export default WriteBoardListPresenter;