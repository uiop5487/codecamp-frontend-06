import * as s from "./write-styles";
import { IWriteNewUI } from "./write-typescript";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import UploadContainer from "./upload/upload.container";
import { v4 as uuidv4 } from "uuid";

export default function WriteNewPageUI(props: IWriteNewUI) {
  return (
    <s.BackGround
      onSubmit={props.handleSubmit(
        props.isEdit ? props.editBtn : props.SubmitButton
      )}
    >
      <s.Warpper>
        <s.Title>게시물 {props.isEdit ? "수정" : "등록"}</s.Title>
        <s.WriterWarpper>
          <s.Name>
            <s.SubTitle>작성자</s.SubTitle>
            <s.WriterBox
              type="text"
              id="writer"
              placeholder="이름을 적어주세요."
              {...props.register("writer")}
              defaultValue={props.data?.fetchBoard.writer || undefined}
            />
            <s.ErrorBox>{props.formState.errors.writer?.message}</s.ErrorBox>
          </s.Name>
          <s.PassWord>
            <s.SubTitle>비밀번호</s.SubTitle>
            <s.WriterBox
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              {...props.register("password")}
            />
            <s.ErrorBox>{props.formState.errors.password?.message}</s.ErrorBox>
          </s.PassWord>
        </s.WriterWarpper>
        <s.SubtitleWrapper>
          <s.SubTitle>제목</s.SubTitle>
          <s.SubtitleBox
            type="text"
            id="title"
            placeholder="제목을 작성해주세요."
            {...props.register("title")}
            defaultValue={props.data?.fetchBoard.title}
          />
          <s.ErrorBox>{props.formState.errors.title?.message}</s.ErrorBox>
        </s.SubtitleWrapper>
        <s.ContentWrapper>
          <s.SubTitle>내용</s.SubTitle>
          <s.ContentBox
            placeholder="내용을 적어주세요."
            id="contents"
            {...props.register("contents")}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <s.ErrorBox>{props.formState.errors.contents?.message}</s.ErrorBox>
        </s.ContentWrapper>
        <s.AdressBtnWrapper>
          <s.SubTitle>주소</s.SubTitle>
          <s.AdressBtn>
            <s.AdressNum onChange={props.onChangeAddressValue} id="zipcode">
              {props.addressInput.zipcode
                ? props.addressInput.zipcode
                : props.data?.fetchBoard?.boardAddress?.zipcode}
            </s.AdressNum>
            <s.AdressBoxbtn onClick={props.showModal} type="button">
              우편번호 검색
            </s.AdressBoxbtn>
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.showModal}
                onCancel={props.showModal}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </s.AdressBtn>
        </s.AdressBtnWrapper>
        <s.AdressInputWrapper>
          <s.AdressInput
            type="text"
            id="address"
            onChange={props.onChangeAddressValue}
            value={
              props.addressInput.address
                ? props.addressInput?.address
                : props.data?.fetchBoard?.boardAddress?.address || undefined
            }
          />
          <s.AdressInput
            type="text"
            id="addressDetail"
            onChange={props.onChangeAddressValue}
            value={
              props.data?.fetchBoard?.boardAddress?.addressDetail || undefined
            }
          />
        </s.AdressInputWrapper>
        <s.LinkWrapper>
          <s.SubTitle>유튜브</s.SubTitle>
          <s.LinkInput
            type="text"
            placeholder="링크를 복사해주세요."
            {...props.register("youtubeUrl")}
            defaultValue={props.data?.fetchBoard?.youtubeUrl || undefined}
          />
        </s.LinkWrapper>
        <s.UploadWrapper>
          <s.SubTitle>사진 첨부</s.SubTitle>
          <s.UploadBtnWrapper>
            <s.UploadBtn>
              {props.imageUrls?.map((el: any, index: number) => (
                <UploadContainer
                  key={uuidv4()}
                  imageUrls={el}
                  index={index}
                  onChangeFileUrl={props.onChangeFileUrl}
                  onChangeEditFileUrl={props.onChangeEditFileUrl}
                />
              ))}
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
          <s.SignupBtn
            onClick={props.isEdit ? props.EditModal : props.sumbitModal}
            isActive={props.formState.isValid}
          >
            {props.isEdit ? "수정" : "등록"} 하기
          </s.SignupBtn>
        </s.SignupbtnWrapper>
      </s.Warpper>
    </s.BackGround>
  );
}
