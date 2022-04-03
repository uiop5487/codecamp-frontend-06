import styled from "@emotion/styled";
import BannerPage from "./banner";
import FooterPage from "./footer";
import HeaderPage from "./header";
import NavPage from "./nav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: 1200px;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <HeaderPage />
      <BannerPage />
      <NavPage />
      <Body>{props.children}</Body>
      <FooterPage />
    </Wrapper>
  );
};

export default Layout;
