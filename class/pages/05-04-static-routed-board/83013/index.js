import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
        }
    }
`;

const StaticRoutedPage = () => {
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: 83013 },
    });

    console.log(data);

    return (
        <div>
            <div>{data?.fetchBoard.number}번 게시글</div>
            <div>작성자:{data?.fetchBoard.writer}</div>
            <div>제목:{data?.fetchBoard.title}</div>
            <div>내용:{data?.fetchBoard.contents}번 게시글로 온것을 환영합니다.</div>
        </div>
    );
};

export default StaticRoutedPage;
