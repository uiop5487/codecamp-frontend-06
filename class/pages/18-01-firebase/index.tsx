import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseapp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // firebase에 데이터 한줄 등록하기
    // 콜렉션에 없으면 만들어주고 있으면 있는데로 가지고 와줌
    const board = collection(getFirestore(firebaseapp), "boards");
    await addDoc(board, {
      writer: "철수",
      title: "제목",
      contents: "내용",
    });
  };

  const onClickFetch = async () => {
    // firebase에 데이터 꺼내오기
    const board = collection(getFirestore(firebaseapp), "boards");
    const result = await getDocs(board);
    const datas = result.docs.map((el: any) => el.data());
    console.log(datas);
  };

  return (
    <>
      <div>!!!!!!!!파이어베이스 연습!!!!!!!!</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
