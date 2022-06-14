import * as s from "./nav.styles";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";

const NAVICATION_MENUS = [
  { name: "파베게시판", page: "/boards/firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "상품페이지", page: "/products" },
  { name: "음식사진", page: "/boards/publicapi" },
  { name: "마이페이지", page: "/mypage" },
];

const NavPage = () => {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target) {
      router.push((event.target as HTMLDivElement).id);
    }
  };

  return (
    <s.Wrapper>
      {NAVICATION_MENUS.map((el) => (
        <div key={uuidv4()}>
          <s.Text id={el.page} onClick={onClickMenu}>
            {el.name}
          </s.Text>
        </div>
      ))}
    </s.Wrapper>
  );
};

export default NavPage;
