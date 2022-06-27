import ReactPlayer from "react-player";
import { IBoardWriteUIProps } from "./writedetail-typescript";
import { Tooltip } from "antd";
import * as s from "./writedetail.styles";
import { v4 as uuidv4 } from "uuid";

export default function DetailPageUI(props: IBoardWriteUIProps) {
  return (
    <s.BackGround>
      <s.Wrapper>
        <s.WriterWrapper>
          <s.WriterBox>
            <s.WriterImg src="/img/userimg.png"></s.WriterImg>
            <s.WriterDetailBox>
              <s.Writer>{props.data?.writer}</s.Writer>
              <s.CreateDate>
                Date:
                {props.data?.createdAt.slice(0, 10)}
              </s.CreateDate>
            </s.WriterDetailBox>
          </s.WriterBox>
          <s.LinkWrapper>
            <s.LinkBox>
              <s.Link src="/img/link.png"></s.Link>
              <Tooltip
                placement="topRight"
                title={`${props.data?.boardAddress?.address} ${props.data?.boardAddress?.addressDetail}`}
              >
                <s.Location src="/img/location.png"></s.Location>
              </Tooltip>
            </s.LinkBox>
          </s.LinkWrapper>
        </s.WriterWrapper>
        <s.DivedLile></s.DivedLile>
        <s.ContentsWrapper>
          <s.BoardTitle>{props.data?.title}</s.BoardTitle>
          <div>
            {props.data?.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <s.ContetsImg
                  src={`https://storage.googleapis.com/${el}`}
                  key={uuidv4()}
                ></s.ContetsImg>
              ))}
          </div>
          <s.Contets>{props.data?.contents}</s.Contets>
        </s.ContentsWrapper>
        <s.YoutubeWrapper>
          <ReactPlayer
            url={props.data?.youtubeUrl || undefined}
            width={486}
            height={240}
          />
          {/* <s.Youtube></s.Youtube> */}
        </s.YoutubeWrapper>
        <s.LikeWrapper>
          <s.LikeBox>
            <s.LikeImg
              src="/img/like.png"
              onClick={props.onClickLike}
            ></s.LikeImg>
            <s.LikeCount>{props.data?.likeCount}</s.LikeCount>
          </s.LikeBox>
          <s.DisLikeBox>
            <s.DisLikeImg
              src="/img/dislike.png"
              onClick={props.onClickDisLike}
            ></s.DisLikeImg>
            <s.DisLikeCount>{props.data?.dislikeCount}</s.DisLikeCount>
          </s.DisLikeBox>
        </s.LikeWrapper>
      </s.Wrapper>
      <s.WrapperFotter>
        <s.ChangeBtn onClick={props.onClickMoveToPage("/boards")}>
          목록으로
        </s.ChangeBtn>
        <s.ChangeBtnCenter
          onClick={props.onClickMoveToPage(
            `/boards/new/${props.router.query.boardid}/edit`
          )}
        >
          수정하기
        </s.ChangeBtnCenter>
        <s.ChangeBtn onClick={props.deleteButton}>삭제하기</s.ChangeBtn>
      </s.WrapperFotter>
    </s.BackGround>
  );
}
