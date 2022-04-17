import { useRouter } from "next/router";

export default function ProductListPage() {
  const router = useRouter();

  const onClickMoveProductNew = () => {
    router.push("/products/new");
  };

  return (
    <div>
      <div>여기는 상품목록 페이지</div>
      <button onClick={onClickMoveProductNew}>상품등록하러가기</button>
    </div>
  );
}
