import { Router, useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./writedetail.queries";
import { useState } from "react";
import DetailPageUI from "./writedetail-presenter";

export default function DetailPageContain() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardid },
    });
    return <DetailPageUI data={data} />;
}
