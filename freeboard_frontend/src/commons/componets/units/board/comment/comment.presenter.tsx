import * as s from "./comment.styles";
import { ICommentUI } from "./comment.types";
import CommentMapPage from "./comment.map";
import InfiniteScroll from "react-infinite-scroller";

const CommentUI = (props: ICommentUI) => {
  return (
    <s.BackGround>
      <s.HeaderWarrper>
        <div>box</div>
        <s.CommentHeader>댓글</s.CommentHeader>
      </s.HeaderWarrper>
      <s.InputWarrper>
        <s.WriterInput
          type="text"
          placeholder="작성자"
          onChange={props.saveWriter}
          value={props.writer}
        />
        <s.PasswordInput
          type="text"
          placeholder="비밀번호"
          onChange={props.savePassword}
          value={props.password}
        />
        <s.StarIcon onChange={props.handleChange} value={props.value} />
      </s.InputWarrper>
      <s.CommentAreaWarrper>
        <s.CommentArea
          placeholder="어쩌구저쩌구"
          onChange={props.saveContents}
          value={props.contents}
        />
        <s.SumbitWarrper>
          <s.CommentAreaTextNum>0 / 100</s.CommentAreaTextNum>
          <s.SumbitButton onClick={props.sumbitBtn}>등록하기</s.SumbitButton>
        </s.SumbitWarrper>
      </s.CommentAreaWarrper>
      <s.FooterWarrper>
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
        </div>
      </s.FooterWarrper>
    </s.BackGround>
  );
};

export default CommentUI;
