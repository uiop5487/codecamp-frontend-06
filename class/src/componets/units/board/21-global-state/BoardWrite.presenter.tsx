import { useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store";

const GlobalBoardWritePresenter = () => {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEdit ? "수정" : "등록"}</div>;
};

export default GlobalBoardWritePresenter;
