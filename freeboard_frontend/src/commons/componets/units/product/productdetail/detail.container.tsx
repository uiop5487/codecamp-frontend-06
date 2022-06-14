import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductDetailPresenter from "./detail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USED_ITEM_PICK,
} from "./detail.qurey";

export default function ProductDetailContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const onClickEditPage = () => {
    router.push(`/products/new/${router.query.productId}/edit`);
  };

  const onClickDelete = () => {
    try {
      deleteUseditem({
        variables: {
          useditemId: router.query.productId,
        },
      });
      alert("삭제되었습니다.");
      router.push(`/products`);
    } catch (error: any) {
      alert(error.messege);
    }
  };

  const onClickPickedCount = async () => {
    console.log(router.query.productId);
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: String(router.query.productId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.productId) },
          },
        ],
      });
      alert("상품이 찜 되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClcikBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.productId,
        },
      });
      console.log(data);
      alert("구매되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  console.log(data);
  return (
    <ProductDetailPresenter
      data={data}
      onClickEditPage={onClickEditPage}
      onClickMoveToPage={onClickMoveToPage}
      onClickDelete={onClickDelete}
      onClickPickedCount={onClickPickedCount}
      userData={userData}
      onClcikBuy={onClcikBuy}
    />
  );
}
