import styled from "@emotion/styled";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseapp } from "../../_app";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const fireBasePage = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<DocumentData[]>([]);

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseapp), "boards");
    await addDoc(board, {
      inputvalue: value,
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseapp), "boards");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    setData(datas);
    console.log(datas);
  };

  const onChangeValue = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Wrapper>
        <input type="text" onChange={onChangeValue} />
        <button onClick={onClickSubmit}>등록하기</button>
        <div>
          {data?.map((el) => {
            <div>
              <div>{el.value}</div>
            </div>;
          })}
        </div>
        <button onClick={onClickFetch}>조회하기</button>
        <input type="text" />
        <button>수정하기</button>
        <button>삭제하기</button>
      </Wrapper>
    </div>
  );
};

export default fireBasePage;
