import * as s from "./writedetail.styles";

export default function DetailPageUI(props) {
    return (
        <s.BackGround>
            <s.Wrapper>
                <s.WriterWrapper>
                    <s.WriterBox>
                        <s.WriterImg src="/img/userimg.png"></s.WriterImg>
                        <s.WriterDetailBox>
                            <s.Writer>
                                {props.data
                                    ? data.fetchBoard.writer
                                    : "작성자를 불러오지 못했습니다."}
                            </s.Writer>
                            <s.CreateDate>
                                Date:{" "}
                                {props.data
                                    ? data.fetchBoard.createdAt.slice(0, 10)
                                    : "날짜를 불러오지 못했습니다."}
                            </s.CreateDate>
                        </s.WriterDetailBox>
                    </s.WriterBox>
                    <s.LinkWrapper>
                        <s.LocationBox>
                            <s.LocationText>
                                {props.data
                                    ? data.fetchBoard.boardAddress.address
                                    : "주소를 불러오지 못했습니다."}
                            </s.LocationText>
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
                    <s.BoardTitle>
                        {props.data ? data.fetchBoard.title : "제목을 불러오지 못했습니다."}
                    </s.BoardTitle>
                    <s.ContetsImg
                        src={
                            props.data
                                ? data.fetchBoard.images
                                : "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
                        }
                    ></s.ContetsImg>
                    <s.Contets>
                        {props.data ? data.fetchBoard.contents : "내용을 불러오지 못했습니다."}
                    </s.Contets>
                </s.ContentsWrapper>
                <s.YoutubeWrapper>
                    <s.Youtube src={props.data ? data.fetchBoard.youtubeUrl : ""}></s.Youtube>
                </s.YoutubeWrapper>
                <s.LikeWrapper>
                    <s.LikeBox>
                        <s.LikeImg src="/img/like.png"></s.LikeImg>
                        <s.LikeCount>{props.data ? data.fetchBoard.likeCount : "0"}</s.LikeCount>
                    </s.LikeBox>
                    <s.DisLikeBox>
                        <s.DisLikeImg src="/img/dislike.png"></s.DisLikeImg>
                        <s.DisLikeCount>
                            {props.data ? data.fetchBoard.dislikeCount : "0"}
                        </s.DisLikeCount>
                    </s.DisLikeBox>
                </s.LikeWrapper>
            </s.Wrapper>
            <s.WrapperFotter>
                <s.ChangeBtn>목록으로</s.ChangeBtn>
                <s.ChangeBtnCenter>수정하기</s.ChangeBtnCenter>
                <s.ChangeBtn>삭제하기</s.ChangeBtn>
            </s.WrapperFotter>
        </s.BackGround>
    );
}
