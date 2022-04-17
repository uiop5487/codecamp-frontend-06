import { collection, getFirestore, addDoc } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useState } from "react";
import { firebaseapp } from "../../../../../../../pages/_app";
import FireBaseWriteUI from "./firebasewrite.presenter";

const FireBaseWriteContainer = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseapp), "board");
    await addDoc(board, {
      ...value,
    });
    alert("게시물이 등록되었습니다.");
    router.push("/boards/firebase");
  };

  const onChangeValue = (event: any) => {
    setValue({
      ...value,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <FireBaseWriteUI
      onClickSubmit={onClickSubmit}
      onChangeValue={onChangeValue}
    />
  );
};

export default FireBaseWriteContainer;
