import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import GlobalBoardWriteContainer from "../../src/componets/units/board/21-global-state/BoardWrite.container";

const GlobalStatePage = () => {
  const [, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalBoardWriteContainer />;
};

export default GlobalStatePage;
