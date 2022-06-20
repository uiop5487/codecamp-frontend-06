import CommentListContainer from "../commentlist/commentlist.container";
import * as s from "./comment.styles";
import { ICommentUI } from "./comment.types";

export default function CommentUI(props: ICommentUI) {
  return (
    <s.BackGround onSubmit={props.handleSubmit(props.submitBtn)}>
      <s.HeaderWarrper>
        <div>box</div>
        <s.CommentHeader>댓글</s.CommentHeader>
      </s.HeaderWarrper>
      <s.InputWarrper>
        <s.WriterInput
          type="text"
          placeholder="작성자"
          {...props.register("writer")}
        />
        <s.PasswordInput
          type="password"
          placeholder="비밀번호"
          {...props.register("password")}
        />
        <s.StarIcon onChange={props.handleChange} value={props.ratingValue} />
      </s.InputWarrper>
      <s.CommentAreaWarrper>
        <s.CommentArea
          placeholder="어쩌구저쩌구"
          {...props.register("contents")}
        />
        <s.SumbitWarrper>
          <s.CommentAreaTextNum>
            {props.watch("contents")?.length}/ 100
          </s.CommentAreaTextNum>
          <s.SumbitButton>등록하기</s.SumbitButton>
        </s.SumbitWarrper>
      </s.CommentAreaWarrper>
      <s.FooterWarrper>
        <CommentListContainer />
      </s.FooterWarrper>
    </s.BackGround>
  );
}
