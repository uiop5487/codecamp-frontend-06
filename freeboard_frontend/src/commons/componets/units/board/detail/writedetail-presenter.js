import * as s from "./writedetail.styles";

export default function DetailPageUI(props) {
    return (
        <s.BackGround>
            <s.Wrapper>
                <s.WriterWrapper>
                    <s.WriterBox>
                        <s.WriterImg src="/img/userimg.png"></s.WriterImg>
                        <s.WriterDetailBox>
                            <s.Writer>{props.data?.fetchBoard.writer}</s.Writer>
                            <s.CreateDate>
                                Date:
                                {props.data?.fetchBoard.createdAt.slice(0, 10)}
                            </s.CreateDate>
                        </s.WriterDetailBox>
                    </s.WriterBox>
                    <s.LinkWrapper>
                        <s.LocationBox>
                            <s.LocationText>{props.data?.fetchBoard.boardAddress}</s.LocationText>
                        </s.LocationBox>
                        <s.LocationBoxFotter></s.LocationBoxFotter>
                        <s.LinkBox>
                            <s.Link src="/img/link.png"></s.Link>
                            <s.Location src="/img/location.png"></s.Location>
                        </s.LinkBox>
                    </s.LinkWrapper>
                </s.WriterWrapper>
                <s.DivedLile></s.DivedLile>
                <s.ContentsWrapper>
                    <s.BoardTitle>{props.data?.fetchBoard.title}</s.BoardTitle>
                    <s.ContetsImg src={props.data?.fetchBoard.images}></s.ContetsImg>
                    <s.Contets>{props.data?.fetchBoard.contents}</s.Contets>
                </s.ContentsWrapper>
                <s.YoutubeWrapper>
                    <s.Youtube src={props.data?.fetchBoard.youtubeUrl}></s.Youtube>
                </s.YoutubeWrapper>
                <s.LikeWrapper>
                    <s.LikeBox>
                        <s.LikeImg src="/img/like.png"></s.LikeImg>
                        <s.LikeCount>{props.data?.fetchBoard.likeCount}</s.LikeCount>
                    </s.LikeBox>
                    <s.DisLikeBox>
                        <s.DisLikeImg src="/img/dislike.png"></s.DisLikeImg>
                        <s.DisLikeCount>{props.data?.fetchBoard.dislikeCount}</s.DisLikeCount>
                    </s.DisLikeBox>
                </s.LikeWrapper>
            </s.Wrapper>
            <s.WrapperFotter>
                <s.ChangeBtn>목록으로</s.ChangeBtn>
                <s.ChangeBtnCenter>수정하기</s.ChangeBtnCenter>
                <s.ChangeBtn onClick={props.deleteButton}>삭제하기</s.ChangeBtn>
            </s.WrapperFotter>
        </s.BackGround>
    );
}
