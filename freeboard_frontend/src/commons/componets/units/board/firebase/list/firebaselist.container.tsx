import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseapp } from "../../../../../../../pages/_app";
import FireBaseListUI from "./firebaselist.presenter";

const FireBaseListContainer = () => {
  const [datas, setDatas] = useState<DocumentData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBoards = async () => {
      const board = collection(getFirestore(firebaseapp), "board");
      const result = await getDocs(board);
      const datas = result.docs.map((el) => el.data());
      setDatas(datas);
      console.log(datas);
    };
    fetchBoards();
  }, []);

  // const onClickDelete = async () => {
  //   await deleteDoc(doc(db, "citie", "DC"))
  // }

  const onClickMoveNew = () => {
    router.push("/boards/firebase/new");
  };

  return <FireBaseListUI datas={datas} onClickMoveNew={onClickMoveNew} />;
};

export default FireBaseListContainer;
