import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./write-mutation";
import WriteNewPageUI from "./write-presenter";
import {
  IInputEvent,
  IMyBoardAdress,
  IMyVariables,
  IWriteNew,
} from "./write-typescript";
import {
  IBoard,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../types/generated/types";

export default function WriteNewPage(props: IWriteNew) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [isActive, setIsActive] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [savePassWord, setSavePassWord] = useState("");
  const [saveTitle, setSaveTitle] = useState("");
  const [saveContent, setSaveContet] = useState("");
  const [saveAdress, setSaveAdress] = useState("");
  const [saveDetailAdress, setSaveDetailAdress] = useState("");
  const [saveZipCode, setSaveZipCode] = useState("");
  const [saveYoutubeUrl, setSaveYoutubeUrl] = useState("");
  const [saveImg, setSaveImg] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [adressError, setAdressError] = useState("");
  //여기는 자바스크립트

  const savedName = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveName(event.target.value);
    if (saveName !== "") {
      setNameError("");
    }
    if (
      (props.isEdit === true && savePassWord !== "") ||
      (event.target.value !== "" &&
        savePassWord !== "" &&
        saveTitle !== "" &&
        saveContent !== "" &&
        saveAdress !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const savedPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setSavePassWord(event.target.value);
    if (savePassWord !== "") {
      setPasswordError("");
    }
    if (
      (props.isEdit === true && event.target.value !== "") ||
      (saveName !== "" &&
        event.target.value !== "" &&
        saveTitle !== "" &&
        saveContent !== "" &&
        saveAdress !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const savedTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveTitle(event.target.value);
    if (saveTitle !== "") {
      setTitleError("");
    }
    if (
      (props.isEdit === true && savePassWord !== "") ||
      (saveName !== "" &&
        savePassWord !== "" &&
        event.target.value !== "" &&
        saveContent !== "" &&
        saveAdress !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const savedContet = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSaveContet(event.target.value);
    if (saveContent !== "") {
      setContentError("");
    }
    if (
      (props.isEdit === true && savePassWord !== "") ||
      (saveName !== "" &&
        savePassWord !== "" &&
        saveTitle !== "" &&
        event.target.value !== "" &&
        saveAdress !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const savedAdress = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveAdress(event.target.value);
    if (saveAdress !== "") {
      setAdressError("");
    }
    if (
      (props.isEdit === true && savePassWord !== "") ||
      (saveName !== "" &&
        savePassWord !== "" &&
        saveTitle !== "" &&
        saveContent !== "" &&
        event.target.value !== "")
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const savedDetailAdress = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveDetailAdress(event.target.value);
  };

  const savedZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveZipCode(event.target.value);
  };

  const savedYoutebUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveYoutubeUrl(event.target.value);
  };

  const savedImg = (event: any) => {
    setSaveImg(event.target.value);
  };

  const sumbitBtn = async () => {
    if (saveName === "") {
      setNameError("작성자를 적어주세요.");
    }
    if (savePassWord === "") {
      setPasswordError("비밀번호를 적어주세요.");
    }
    if (saveTitle === "") {
      setTitleError("제목을 적어주세요.");
    }
    if (saveContent === "") {
      setContentError("내용을 적어주세요.");
    }
    if (saveAdress === "") {
      setAdressError("주소를 적어주세요.");
    }
    if (
      saveName !== "" &&
      savePassWord !== "" &&
      saveTitle !== "" &&
      saveContent !== "" &&
      saveAdress !== ""
    ) {
      try {
        const myData: any = await createBoard({
          variables: {
            createBoardInput: {
              writer: saveName,
              password: savePassWord,
              title: saveTitle,
              contents: saveContent,
              youtubeUrl: saveYoutubeUrl,
              images: [saveImg],
              boardAddress: {
                zipcode: saveZipCode,
                address: saveAdress,
                addressDetail: saveDetailAdress,
              },
            },
          },
        });
        console.log(myData);
        alert("등록완료");
        alert("상세페이지로 이동하시겠습니까?");
        router.push(`/boards/new/${myData.data.createBoard._id}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const editBtn = async () => {
    if (savePassWord === "") {
      setPasswordError("비밀번호를 적어주세요.");
    }
    if (savePassWord !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    try {
      const myBoardAddress: IMyBoardAdress = {};
      const myVariables: IMyVariables = {};
      if (saveTitle !== "") myVariables.title = saveTitle;
      if (saveContent !== "") myVariables.contents = saveContent;
      if (saveYoutubeUrl !== "") myVariables.youtubeUrl = saveYoutubeUrl;
      if (saveAdress !== "") myBoardAddress.address = saveAdress;
      if (saveDetailAdress !== "")
        myBoardAddress.addressDetail = saveDetailAdress;
      if (saveZipCode !== "") myBoardAddress.zipcode = saveZipCode;
      await updateBoard({
        variables: {
          updateBoardInput: myVariables,
          password: savePassWord,
          boardId: String(router.query.boardid),
        },
      });
      alert("상세페이지로 이동하시겠습니까?");
      router.push(`/boards/new/${router.query.boardid}`);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <WriteNewPageUI
      savedName={savedName}
      nameError={nameError}
      savedPassWord={savedPassWord}
      passwordError={passwordError}
      savedTitle={savedTitle}
      savedContet={savedContet}
      contentError={contentError}
      savedZipCode={savedZipCode}
      savedAdress={savedAdress}
      saveDetailAdress={savedDetailAdress}
      saveYoutubeUrl={savedYoutebUrl}
      saveImg={savedImg}
      sumbitBtn={sumbitBtn}
      editBtn={editBtn}
      isEdit={props.isEdit}
      titleError={titleError}
      adressError={adressError}
      isActive={isActive}
      data={props.data}
    />
  );
}
