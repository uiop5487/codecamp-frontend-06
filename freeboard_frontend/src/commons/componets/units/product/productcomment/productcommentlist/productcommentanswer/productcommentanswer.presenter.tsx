import * as s from "./productcommentanswer.styles";
import { ICommentAnswerPresenterProps } from "./productcommentanswer.types";

export default function CommentAnswerPresenter(
  props: ICommentAnswerPresenterProps
) {
  return (
    <div>
      {props.isAnswer ? (
        <s.Wrapper>
          <s.AnswerArrowWrapper>
            <s.AnswerArrow src="/img/answerarrow.png"></s.AnswerArrow>
          </s.AnswerArrowWrapper>
          <s.BackGround>
            <s.CommentAreaWarrper>
              <s.CommentArea
                placeholder="답글을 입력해주세요."
                onChange={props.onChangeContents}
              />
              <s.SumbitWarrper>
                <s.CommentAreaTextNum>0 / 100</s.CommentAreaTextNum>
                <s.SumbitButton onClick={props.onClickSumbit}>
                  답글등록
                </s.SumbitButton>
              </s.SumbitWarrper>
            </s.CommentAreaWarrper>
            <s.FooterWarrper></s.FooterWarrper>
          </s.BackGround>
        </s.Wrapper>
      ) : (
        <div></div>
      )}
    </div>
  );
}
