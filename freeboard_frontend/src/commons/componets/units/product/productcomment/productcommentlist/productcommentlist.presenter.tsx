import ProdcutCommentListItem from "./productcommentlist.items";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function ProdcutCommentListPresenter(props: any) {
  return (
    <div>
      {props.data?.fetchUseditemQuestions ? (
        <div style={{ width: "1200px", height: "500px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditemQuestions.map((el: any) => (
              <ProdcutCommentListItem
                key={uuidv4()}
                data={el}
                onClickShowEdit={props.onClickShowEdit}
                onChangeContents={props.onChangeContents}
                onClickDelete={props.onClickDelete}
                onClickShowAnswer={props.onClickShowAnswer}
                setQiestionId={props.setQiestionId}
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
