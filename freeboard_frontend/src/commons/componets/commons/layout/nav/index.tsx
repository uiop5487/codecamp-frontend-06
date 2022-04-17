import * as s from "./nav.styles";
import { useRouter } from "next/router";

const NAVICATION_MENUS = [
  { name: "파베게시판", page: "/boards/firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "상품페이지", page: "/products" },
  { name: "음식사진", page: "/boards/publicapi" },
  { name: "마이페이지", page: "/mypage" },
];

const NavPage = () => {
  const router = useRouter();

  const onClickMenu = (event: any) => {
    if (event.target) {
      router.push(event.target.id);
    }
  };

  return (
    <s.Wrapper>
      {NAVICATION_MENUS.map((el) => (
        <div key={el.page}>
          <s.Text id={el.page} onClick={onClickMenu}>
            {el.name}
          </s.Text>
        </div>
      ))}
    </s.Wrapper>
  );
};

export default NavPage;
