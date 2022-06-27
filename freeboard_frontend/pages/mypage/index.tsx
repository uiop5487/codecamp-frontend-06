import { useAuth } from "../../src/commons/componets/commons/hooks/useAuth";
import MypageMainContainer from "../../src/commons/componets/units/mypage/mypagemain/main.container";

export default function MyPage() {
  useAuth();

  return <MypageMainContainer />;
}
