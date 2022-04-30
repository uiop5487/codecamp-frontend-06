import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as s from "./bestboardstyles";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      createdAt
      images
    }
  }
`;

const BestBoards = () => {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  const onClickMoveDetail = (event: any) => {
    router.push(`/boards/new/${event.currentTarget.id}`);
  };
  console.log(data);

  return (
    <s.BackGround>
      <s.Title>베스트 게시글</s.Title>
      <s.BoxWarrper>
        {data?.fetchBoardsOfTheBest.map((el: any) => (
          <s.Box key={uuidv4()} id={el._id} onClick={onClickMoveDetail}>
            <s.ImgWraper>
              {el.images
                .filter((e: string) => e)
                .reduce(
                  (_: any, cur: string) => (
                    <s.Img
                      src={`https://storage.googleapis.com/${cur}`}
                      key={uuidv4()}
                    ></s.Img>
                  ),
                  []
                )}
            </s.ImgWraper>
            <s.TitleWrapper>
              <s.BoxTitle>{el.title}</s.BoxTitle>
            </s.TitleWrapper>
            <s.SpaceBetween>
              <div>
                <s.WriterWrapper>
                  <s.WriterImg src="/img/userimg.png"></s.WriterImg>
                  <s.Writer>{el.writer}</s.Writer>
                </s.WriterWrapper>
                <s.CreatedAt>Date: {el.createdAt.slice(0, 10)}</s.CreatedAt>
              </div>
              <s.LikeCountWrapper>
                <s.LikeCountImg src="/img/like.png"></s.LikeCountImg>
                <s.LikeCount>{el.likeCount}</s.LikeCount>
              </s.LikeCountWrapper>
            </s.SpaceBetween>
          </s.Box>
        ))}
      </s.BoxWarrper>
    </s.BackGround>
  );
};

export default BestBoards;
