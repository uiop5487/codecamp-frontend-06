import styled from "@emotion/styled";

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
  font-weight: 600;
  padding: 0px 40px 0px 40px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const CenterText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-left: solid 1px white;
  border-right: solid 1px white;
  padding: 0px 40px 0px 40px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const NavPage = () => {
  return (
    <Wrapper>
      <Text>자유게시판</Text>
      <CenterText>자유게시판</CenterText>
      <Text>자유게시판</Text>
    </Wrapper>
  );
};

export default NavPage;
