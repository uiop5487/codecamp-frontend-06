import styled from "@emotion/styled";
import MyPageSideContainer from "../mypageside/mypageside.continer";

export const MyPageMainWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MypageMainPresenter() {
  return (
    <MyPageMainWrapper>
      <MyPageSideContainer />
    </MyPageMainWrapper>
  );
}
