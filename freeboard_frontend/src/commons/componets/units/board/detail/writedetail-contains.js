import { Router, useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./writedetail.queries";
import { useState } from "react";
import DetailPageUI from "./writedetail-presenter";

export default function DetailPageContain() {
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardid },
    });

    // mutation{
    //     deleteBoard(boardId: "623a1ddaa8255b0029883d03")
    //   }
    const deleteButton = () => {
        deleteBoard({
            variables: { boardId: String(data.fetchBoard._id) },
        });
        alert("게시글 목록으로 이동하시겠습니까?");
        router.push("/boards");
    };
    return <DetailPageUI data={data} deleteButton={deleteButton} />;
}
