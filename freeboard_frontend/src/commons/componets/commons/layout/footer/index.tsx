import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.9);
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const TextLeft = styled.div`
  color: white;
  padding: 0px 10px 0px 10px;
  font-size: 10px;
`;

const TextLeft2 = styled.div`
  color: white;
  padding: 0px 10px 0px 10px;
  font-size: 10px;
  border-left: 1px solid white;
`;

const TextCenter = styled.div`
  color: white;
  padding: 0px 10px 0px 10px;
  font-size: 10px;
  border-left: 1px solid white;
  border-right: 1px solid white;
`;

const TextRight = styled.div`
  color: white;
  padding: 0px 10px 0px 10px;
  font-size: 10px;
  border-right: 1px solid white;
`;

const TextRight2 = styled.div`
  color: white;
  padding: 0px 10px 0px 10px;
  font-size: 10px;
`;

export default function FooterPage() {
  return (
    <Wrapper>
      <TextWrapper>
        <TextLeft>회사소개</TextLeft>
        <TextLeft2>채용정보</TextLeft2>
        <TextCenter>이용약관</TextCenter>
        <TextRight>개인정보 방침처리</TextRight>
        <TextRight2>위치기반 서비스 이용약관</TextRight2>
      </TextWrapper>
      <div></div>
    </Wrapper>
  );
}
