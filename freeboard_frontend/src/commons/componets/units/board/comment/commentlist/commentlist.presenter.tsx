import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import CommentMapPage from "./comment.map";
import { ICommentListPresenter } from "./commentlist.types";

export default function CommentListPresenter(props: ICommentListPresenter) {
  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el: any) => (
          <CommentMapPage
            el={el}
            key={uuidv4()}
            data={props.data}
            onClickDelete={props.onClickDelete}
            showModal={props.showModal}
            isModalVisible={props.isModalVisible}
            Tog={props.Tog}
            deletePasword={props.deletePasword}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
