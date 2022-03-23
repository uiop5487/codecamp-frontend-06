import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./write-mutation";
import WriteNewPageUI from "./write-presenter";

export default function WriteNewPage() {
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);
    const [isActive, setIActive] = useState(false);
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

    const savedName = (event) => {
        setSaveName(event.target.value);
        if (saveName !== "") {
            setNameError("");
        }
        if (
            event.target.value !== "" &&
            savePassWord !== "" &&
            saveTitle !== "" &&
            saveContent !== "" &&
            saveAdress !== ""
        ) {
            setIActive(true);
        } else {
            setIActive(false);
        }
    };

    const savedPassWord = (event) => {
        setSavePassWord(event.target.value);
        if (savePassWord !== "") {
            setPasswordError("");
        }
        if (
            saveName !== "" &&
            event.target.value !== "" &&
            saveTitle !== "" &&
            saveContent !== "" &&
            saveAdress !== ""
        ) {
            setIActive(true);
        } else {
            setIActive(false);
        }
    };

    const savedTitle = (event) => {
        setSaveTitle(event.target.value);
        if (saveTitle !== "") {
            setTitleError("");
        }
        if (
            saveName !== "" &&
            savePassWord !== "" &&
            event.target.value !== "" &&
            saveContent !== "" &&
            saveAdress !== ""
        ) {
            setIActive(true);
        } else {
            setIActive(false);
        }
    };

    const savedContet = (event) => {
        setSaveContet(event.target.value);
        if (saveContent !== "") {
            setContentError("");
        }
        if (
            saveName !== "" &&
            savePassWord !== "" &&
            saveTitle !== "" &&
            event.target.value !== "" &&
            saveAdress !== ""
        ) {
            setIActive(true);
        } else {
            setIActive(false);
        }
    };

    const savedAdress = (event) => {
        setSaveAdress(event.target.value);
        if (saveAdress !== "") {
            setAdressError("");
        }
        if (
            saveName !== "" &&
            savePassWord !== "" &&
            saveTitle !== "" &&
            saveContent !== "" &&
            event.target.value !== ""
        ) {
            setIActive(true);
        } else {
            setIActive(false);
        }
    };

    const savedDetailAdress = (event) => {
        setSaveDetailAdress(event.target.value);
    };

    const savedZipCode = (event) => {
        setSaveZipCode(event.target.value);
    };

    const savedYoutebUrl = (event) => {
        setSaveYoutubeUrl(event.target.value);
    };

    const savedImg = (event) => {
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
                const myData = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: saveName,
                            password: savePassWord,
                            title: saveTitle,
                            contents: saveContent,
                            youtubeUrl: saveYoutubeUrl,
                            images: saveImg,
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
            } catch (error) {
                alert(error.message);
            }
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
            titleError={titleError}
            adressError={adressError}
            isActive={isActive}
        />
    );
}
