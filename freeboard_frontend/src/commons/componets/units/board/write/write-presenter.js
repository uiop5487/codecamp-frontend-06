import * as s from "./write-styles";

export default function WriteNewPageUI(props) {
    return (
        <s.BackGround>
            <s.Warpper>
                <s.Title>게시물 등록</s.Title>
                <s.WriterWarpper>
                    <s.Name>
                        <s.SubTitle>작성자</s.SubTitle>
                        <s.WriterBox
                            type="text"
                            placeholder="이름을 적어주세요."
                            onChange={props.savedName}
                        />
                        <s.ErrorBox>{props.nameError}</s.ErrorBox>
                    </s.Name>
                    <s.PassWord>
                        <s.SubTitle>비밀번호</s.SubTitle>
                        <s.WriterBox
                            type="text"
                            placeholder="비밀번호를 입력하세요"
                            onChange={props.savedPassWord}
                        />
                        <s.ErrorBox>{props.passwordError}</s.ErrorBox>
                    </s.PassWord>
                </s.WriterWarpper>
                <s.SubtitleWrapper>
                    <s.SubTitle>제목</s.SubTitle>
                    <s.SubtitleBox
                        type="text"
                        placeholder="제목을 작성해주세요."
                        onChange={props.savedTitle}
                    />
                    <s.ErrorBox>{props.titleError}</s.ErrorBox>
                </s.SubtitleWrapper>
                <s.ContentWrapper>
                    <s.SubTitle>내용</s.SubTitle>
                    <s.ContentBox
                        type="text"
                        placeholder="내용을 적어주세요."
                        onChange={props.savedContet}
                    />
                    <s.ErrorBox>{props.contentError}</s.ErrorBox>
                </s.ContentWrapper>
                <s.AdressBtnWrapper>
                    <s.SubTitle>주소</s.SubTitle>
                    <s.AdressBtn>
                        <s.AdressNum onChange={props.savedZipCode}>000000</s.AdressNum>
                        <s.AdressBoxbtn>우편번호 검색</s.AdressBoxbtn>
                    </s.AdressBtn>
                </s.AdressBtnWrapper>
                <s.AdressInputWrapper>
                    <s.AdressInput type="text" onChange={props.savedAdress} />
                    <s.AdressInput type="text" onChange={props.savedDetailAdress} />
                </s.AdressInputWrapper>
                <s.ErrorBox>{props.adressError}</s.ErrorBox>
                <s.LinkWrapper>
                    <s.SubTitle>유튜브</s.SubTitle>
                    <s.LinkInput
                        type="text"
                        placeholder="링크를 복사해주세요."
                        onChange={props.savedYoutebUrl}
                    />
                </s.LinkWrapper>
                <s.UploadWrapper>
                    <s.SubTitle>사진 첨부</s.SubTitle>
                    <s.UploadBtnWrapper>
                        <s.UploadBtn htmlFor="Plus">
                            +
                            <s.Plus id="Plus" type="file" onChange={props.savedImg} />
                            <s.Upload>Upload</s.Upload>
                        </s.UploadBtn>
                        <s.UploadBtn htmlFor="Plus">
                            +
                            <s.Plus id="Plus" type="file" onChange={props.savedImg} />
                            <s.Upload>Upload</s.Upload>
                        </s.UploadBtn>
                        <s.UploadBtn htmlFor="Plus">
                            +
                            <s.Plus id="Plus" type="file" onChange={props.savedImg} />
                            <s.Upload>Upload</s.Upload>
                        </s.UploadBtn>
                    </s.UploadBtnWrapper>
                </s.UploadWrapper>
                <s.RadioBtnWrapper>
                    <s.SubTitle>메인 설정</s.SubTitle>
                    <s.RadioBtnbox>
                        <s.RadioBtn type="radio" name="gender" />
                        <s.RadioBtntext>유튜브</s.RadioBtntext>
                        <s.RadioBtn type="radio" name="gender" />
                        <s.RadioBtntext2>사진</s.RadioBtntext2>
                    </s.RadioBtnbox>
                </s.RadioBtnWrapper>
                <s.SignupbtnWrapper>
                    <s.SignupBtn onClick={props.sumbitBtn}>등록하기</s.SignupBtn>
                </s.SignupbtnWrapper>
            </s.Warpper>
        </s.BackGround>
    );
}
