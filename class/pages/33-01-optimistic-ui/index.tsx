import { useMutation, useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimiticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6269ed43a8255b002988d65f",
    },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: "6269ed43a8255b002988d65f",
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD,
        //     variables: { boardId: "6269ed43a8255b002988d65f" },
        //   },
        // ],
        optimisticResponse: {
          likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: {
              boardId: "6269ed43a8255b002988d65f",
            },
            data: {
              fetchBoard: {
                _id: "6269ed43a8255b002988d65f",
                __typename: "Board",
                likeCount: data.likeBoard,
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>좋아요: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
