import { useMoveToPage } from "../../src/componets/commons/hooks/useMoveToPage";

export default function CustomHooksUseMobeToPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판</button>
      <button onClick={onClickMoveToPage("/market")}>마켓</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지</button>
    </div>
  );
}
