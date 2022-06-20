import * as s from "./commentlist.styles";
import { ICommentListEditUI } from "./commentlist.types";

export default function CommentListEditUI(props: ICommentListEditUI) {
  return (
    <s.EditCommentBackGround>
      <div>
        <div>
          <s.EditHeaderBoxWrapper>
            <s.EditCommentWriterWrapper>
              <img src="/img/userimg.png"></img>
              <s.EditCommentWriter>{props.el.writer}</s.EditCommentWriter>
              <s.EditCommentPasswordInput
                type="password"
                placeholder="비밀번호"
                onChange={props.saveEditPassword}
              />
              <s.StarIcon
                defaultValue={props.el.rating}
                onChange={props.EdithandleChange}
              />
            </s.EditCommentWriterWrapper>
            <div>
              <s.DeleteImg
                src="/img/delete.png"
                onClick={props.onClickDisplay(props.el._id)}
              ></s.DeleteImg>
            </div>
          </s.EditHeaderBoxWrapper>
        </div>
        <s.TextBoderSolid>
          <div>
            <s.EditCommentTextArea
              placeholder="어쩌구저쩌구"
              onChange={props.saveEditContents}
              defaultValue={props.el.contents}
            />
          </div>
          <s.EditButtonWrapper>
            <div>
              {props.editContents
                ? props.editContents.length
                : props.el.contents.length}
              / 100
            </div>
            <s.EditCommentButton onClick={props.onClickEdit}>
              수정하기
            </s.EditCommentButton>
          </s.EditButtonWrapper>
        </s.TextBoderSolid>
      </div>
    </s.EditCommentBackGround>
  );
}
