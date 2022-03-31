import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNav from "./nav";

const Body = styled.div`
  /* height: 500px; */
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LayoutSidebar = styled.div`
  height: 700px;
  width: 100px;
  background-color: orange;
`;

const HIDDEN_HEADERS = ["/12-05-modal-refactoring"];

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNav />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
};

export default Layout;
