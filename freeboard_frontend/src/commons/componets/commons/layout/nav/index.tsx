import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  font-size: 18px;
  width: 147px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const CenterText = styled.div`
  color: white;
  width: 147px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  border-left: solid 1px white;
  border-right: solid 1px white;
  /* padding: 0px 40px 0px 40px; */
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const NavPage = () => {
  const router = useRouter();
  const onClickMovePage = () => {
    router.push(`/boards`);
  };

  const onClickMoveApi = () => {
    router.push(`/boards/publicapi`);
  };

  const onClickMoveFirebase = () => {
    router.push(`/boards/firebase`);
  };

  return (
    <Wrapper>
      <Text onClick={onClickMovePage}>자유게시판</Text>
      <CenterText>상품목록</CenterText>
      <CenterText>마이페이지</CenterText>
      <CenterText onClick={onClickMoveApi}>공개 API</CenterText>
      <Text onClick={onClickMoveFirebase}>파이어베이스</Text>
    </Wrapper>
  );
};

export default NavPage;
