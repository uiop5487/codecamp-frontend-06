// import request from "graphql-request";
import Comment from "../../../../src/commons/componets/units/board/comment/commentwrite/comment.container";
import DetailPageContain from "../../../../src/commons/componets/units/board/detail/writedetail-contains";
// import { IBoardPageProps } from "../../../../src/commons/componets/units/board/detail/writedetail-typescript";
// import { FETCH_BOARD } from "../../../../src/commons/componets/units/board/detail/writedetail.queries";

// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://backend06.codebootcamp.co.kr/graphql",
//     FETCH_BOARD,
//     { boardId: context.query.boardid }
//   );

//   return {
//     props: {
//       data: {
//         writer: result.fetchBoard.writer,
//         title: result.fetchBoard.title,
//         createdAt: result.fetchBoard.createdAt,
//         boardAddress: result.fetchBoard?.boardAddress,
//         images: result.fetchBoard.images,
//         contents: result.fetchBoard.contents,
//         youtubeUrl: result.fetchBoard.youtubeUrl,
//         likeCount: result.fetchBoard.likeCount,
//         dislikeCount: result.fetchBoard.dislikeCount,
//       },
//     },
//   };
// };

export default function DetailPage() {
  return (
    <div>
      <DetailPageContain />
      <Comment />
    </div>
  );
}
