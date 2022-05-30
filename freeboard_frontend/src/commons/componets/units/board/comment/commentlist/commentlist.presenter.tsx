import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { IBoardComment } from "../../../../../types/generated/types";
import CommentMapPage from "./comment.map";
import { ICommentListPresenter } from "./commentlist.types";

export default function CommentListPresenter(props: ICommentListPresenter) {
  console.log(props.data?.fetchBoardComments.length);
  return (
    <>
      {props.data?.fetchBoardComments.length ? (
        <div
          style={{
            height:
              props.data?.fetchBoardComments.length >= 4 ? "500px" : "100%",
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el: IBoardComment) => (
              <CommentMapPage
                el={el}
                key={uuidv4()}
                onClickDelete={props.onClickDelete}
                showModal={props.showModal}
                isModalVisible={props.isModalVisible}
                Tog={props.Tog}
              />
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
