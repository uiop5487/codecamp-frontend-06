import ProdcutCommentListContainer from "../productcommentlist/productcommentlist.container";
import * as s from "./productcommentwrite.styles";
import { IProductCommentWritePresenterProps } from "./productcommentwrite.types";
// import InfiniteScroll from "react-infinite-scroller";
// import { v4 as uuidv4 } from "uuid";

export default function ProductCommentWritePresenter(
  props: IProductCommentWritePresenterProps
) {
  return (
    <s.BackGround onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <s.HeaderWarrper>
        <div>box</div>
        <s.CommentHeader>댓글</s.CommentHeader>
      </s.HeaderWarrper>
      <s.CommentAreaWarrper>
        <s.CommentArea
          placeholder="어쩌구저쩌구"
          {...props.register("contents")}
        />
        <s.SumbitWarrper>
          <s.CommentAreaTextNum>0 / 100</s.CommentAreaTextNum>
          <s.SumbitButton>등록하기</s.SumbitButton>
        </s.SumbitWarrper>
      </s.CommentAreaWarrper>
      <s.FooterWarrper>
        <ProdcutCommentListContainer />
      </s.FooterWarrper>
    </s.BackGround>
  );
}
