import { ChangeEventHandler } from "react";
import * as s from "./write-styles";
import { IWriteNewUI } from "./write-typescript";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function WriteNewPageUI(props: IWriteNewUI) {
  return (
    <s.BackGround>
      <s.Warpper>
        <s.Title>게시물 {props.isEdit ? "수정" : "등록"}</s.Title>
        <s.WriterWarpper>
          <s.Name>
            <s.SubTitle>작성자</s.SubTitle>
            <s.WriterBox
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.savedName}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <s.ErrorBox>{props.nameError}</s.ErrorBox>
          </s.Name>
          <s.PassWord>
            <s.SubTitle>비밀번호</s.SubTitle>
            <s.WriterBox
              type="text"
              placeholder="비밀번호를 입력하세요"
              onChange={props.savedPassWord}
              defaultValue={props.data?.fetchBoard.password}
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
            defaultValue={props.data?.fetchBoard.title}
          />
          <s.ErrorBox>{props.titleError}</s.ErrorBox>
        </s.SubtitleWrapper>
        <s.ContentWrapper>
          <s.SubTitle>내용</s.SubTitle>
          <s.ContentBox
            placeholder="내용을 적어주세요."
            onChange={props.savedContet}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <s.ErrorBox>{props.contentError}</s.ErrorBox>
        </s.ContentWrapper>
        <s.AdressBtnWrapper>
          <s.SubTitle>주소</s.SubTitle>
          <s.AdressBtn>
            <s.AdressNum onChange={props.savedZipCode}>
              {props.saveZipCode
                ? props.saveZipCode
                : props.data?.fetchBoard?.boardAddress?.zipcode}
            </s.AdressNum>
            <s.AdressBoxbtn onClick={props.showModal}>
              우편번호 검색
            </s.AdressBoxbtn>
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </s.AdressBtn>
        </s.AdressBtnWrapper>
        <s.AdressInputWrapper>
          <s.AdressInput
            type="text"
            onChange={props.savedAdress}
            // value={props.saveAdress}
            defaultValue={
              props.saveAdress
                ? props.saveAdress
                : props.data?.fetchBoard?.boardAddress?.address
            }
            // value={props.data?.fetchBoard?.boardAddress?.address}
          />
          {/* onClick={props.isEdit ? props.EditModal : props.sumbitModal} */}
          <s.AdressInput
            type="text"
            onChange={props.saveDetailAdress}
            defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail}
          />
        </s.AdressInputWrapper>
        <s.ErrorBox>{props.adressError}</s.ErrorBox>
        <s.LinkWrapper>
          <s.SubTitle>유튜브</s.SubTitle>
          <s.LinkInput
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.saveYoutubeUrl}
            defaultValue={props.data?.fetchBoard?.youtubeUrl}
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
          {/* <Button type="primary" onClick={props.Toggle}>
            게시글 등록
          </Button> */}
          <s.SignupBtn
            onClick={props.isEdit ? props.EditModal : props.sumbitModal}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정" : "등록"} 하기
          </s.SignupBtn>
          {props.isOpen && (
            <Modal
              title={
                props.isEdit
                  ? "게시글 수정을 완료하였습니다."
                  : "게시글 등록을 완료하였습니다."
              }
              visible={true}
              onOk={props.isEdit ? props.editBtn : props.SubitButton}
              onCancel={props.Toggle}
            >
              상세페이지로 이동하시겠습니까?
            </Modal>
          )}
        </s.SignupbtnWrapper>
      </s.Warpper>
    </s.BackGround>
  );
}