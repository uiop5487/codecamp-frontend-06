import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProdcutCommentListPresenter from "./productcommentlist.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./productcommentlist.qurey";

export default function ProdcutCommentListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.productId },
  });
  console.log(data);
  return <ProdcutCommentListPresenter data={data} />;
}
