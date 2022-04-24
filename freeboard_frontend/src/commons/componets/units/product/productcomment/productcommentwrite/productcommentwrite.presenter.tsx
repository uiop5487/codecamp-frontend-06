import ProdcutCommentListContainer from "../productcommentlist/productcommentlist.container";
import * as s from "./productcommentwrite.styles";
// import InfiniteScroll from "react-infinite-scroller";

export default function ProductCommentWritePresenter(props: any) {
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
        {/* <div style={{ height: "500px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el: any) => (
              <CommentMapPage
                el={el}
                key={el._id}
                data={props.data}
                onClickDelete={props.onClickDelete}
                showModal={props.showModal}
                isModalVisible={props.isModalVisible}
                Tog={props.Tog}
                deletePasword={props.deletePasword}
                isEdit={props.isEdit}
                EdithandleChange={props.EdithandleChange}
              />
            ))}
          </InfiniteScroll>
        </div> */}
      </s.FooterWarrper>
    </s.BackGround>
  );
}
