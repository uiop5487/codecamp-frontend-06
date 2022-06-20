import ProdcutCommentListItem from "./productcommentlist.items";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { IProdcutCommentListPresenter } from "./productcommentlist.types";
import { IUseditemQuestion } from "../../../../../types/generated/types";

export default function ProdcutCommentListPresenter(
  props: IProdcutCommentListPresenter
) {
  return (
    <div>
      {props.data?.fetchUseditemQuestions ? (
        <div
          style={{
            width: "1200px",
            height:
              props.data?.fetchUseditemQuestions.length >= 4 ? "500px" : "100%",
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditemQuestions.map((el: IUseditemQuestion) => (
              <ProdcutCommentListItem
                key={uuidv4()}
                data={el}
                onChangeContents={props.onChangeContents}
                onClickDelete={props.onClickDelete}
                contents={props.contents}
                onLoadMore={props.onLoadMore}
              />
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
