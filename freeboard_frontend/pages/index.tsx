import { useRouter } from "next/router";
import * as s from "../styles/mainpagestyles";

const MainPage = () => {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/boards");
  };
  const onClickMove2 = () => {
    router.push("/products");
  };
  return (
    <s.BackGround>
      <s.MoveButton onClick={onClickMove}>자유게시판으로 이동</s.MoveButton>
      <s.MoveButton onClick={onClickMove2}>마켓으로 이동</s.MoveButton>
    </s.BackGround>
  );
};

export default MainPage;
