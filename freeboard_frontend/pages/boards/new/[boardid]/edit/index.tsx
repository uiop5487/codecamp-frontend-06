import WriteNewPage from "../../../../../src/commons/componets/units/board/write/write-container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

const PageA = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: router.query.boardid },
  });
  return <WriteNewPage isEdit={true} data={data} />;
};

export default PageA;

// 상세페에지에서 수정하기 누르면 수정페이지로 이동 후 등록페이지 ui, 기능 구현
