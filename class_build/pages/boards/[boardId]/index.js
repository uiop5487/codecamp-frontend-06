import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsDetailPage(props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta property="og:title" content={props.myBoardData?.title} />
        <meta property="og:description" content={props.myBoardData?.contents} />
        <meta property="og:image" content={props.myBoardData?.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세 페이지 입니다!, 게시글 ID는
        {router.query.boardId} 입니다.
      </div>
    </>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      myBoardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
