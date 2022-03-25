//여기는 수정하기 페이지

import BoardWrite from "../../../../src/componets/units/board/09-board-write/board-write.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

const BoardEditPage = () => {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.mynumber) },
    });

    return <BoardWrite isEdit={true} data={data} />;
};

export default BoardEditPage;
