import * as s from "./nav.styles";
import { useRouter } from "next/router";

const NAVICATION_MENUS = [
  { name: "파이어베이스", page: "/boards/firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "마이페이지", page: "/mypage" },
  { name: "상품목록", page: "" },
  { name: "공개API", page: "/boards/publicapi" },
];

const NavPage = () => {
  const router = useRouter();

  const onClickMenu = (event) => {
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
