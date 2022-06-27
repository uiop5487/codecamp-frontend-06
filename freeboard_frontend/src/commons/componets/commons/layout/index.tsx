import styled from "@emotion/styled";
import { useRouter } from "next/router";
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
  /* width: 100%;
  height: 100%; */
`;

const HIDDEN_HEADERS = ["/", "/logins/login/", "/logins/signup/"];
const HIDDEN_BANNERS = ["/mypage/", "/mypage/basket/"];

const Layout = (props: any) => {
  const router = useRouter();
  const isHidden = HIDDEN_HEADERS.includes(router.asPath);
  const isBanner = HIDDEN_BANNERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHidden && <HeaderPage />}
      {!isBanner && !isHidden && <BannerPage />}
      {!isHidden && <NavPage />}
      <Body>{props.children}</Body>
      {!isHidden && <FooterPage />}
    </Wrapper>
  );
};

export default Layout;
