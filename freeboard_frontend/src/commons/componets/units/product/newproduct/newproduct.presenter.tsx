import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
// import Map from "../map/newproductmap";
import * as s from "./newproduct.styles";
import { v4 as uuidv4 } from "uuid";
import MapDetail from "../map/kakaomap";
import UploadContainer from "./newprodcut.upload";
import { INewProductPresenterProps } from "./newproduct.types";

export default function NewProductPresenter(props: INewProductPresenterProps) {
  return (
    <s.BackGround>
      <s.FormWrapper
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickEdit : props.onClickSubmit
        )}
      >
        <s.TitleWrapper>
          <s.TitleText>상품 {props.isEdit ? "수정" : "등록"}하기</s.TitleText>
        </s.TitleWrapper>
        <s.InputWarpper>
          <s.InputText>상품명</s.InputText>
          <s.Input
            type="text"
            {...props.register("name")}
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem?.name}
          />
          <s.Error>{props.formState.errors.name?.message}</s.Error>
        </s.InputWarpper>
        <s.InputWarpper>
          <s.InputText>한줄요약</s.InputText>
          <s.Input
            type="text"
            {...props.register("remarks")}
            placeholder="한줄요약을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <s.Error>{props.formState.errors.remarks?.message}</s.Error>
        </s.InputWarpper>
        <s.ContentsWarpper>
          <s.InputText>상품설명</s.InputText>
          <s.Contents
            onChange={props.onChangeContents}
            value={props.getValues("contents") || ""}
          ></s.Contents>
          <s.Error>{props.formState.errors.contents?.message}</s.Error>
        </s.ContentsWarpper>
        <s.InputWarpper>
          <s.InputText>판매가격</s.InputText>
          <s.Input
            type="text"
            {...props.register("price")}
            placeholder="판매가격을 작성해주세요."
            defaultValue={props.data?.fetchUseditem?.price || ""}
          />
          <s.Error>{props.formState.errors.price?.message}</s.Error>
        </s.InputWarpper>
        <s.InputWarpper>
          <s.InputText>태그입력</s.InputText>
          <s.TagsWrapper>
            <s.TagsInput
              type="text"
              onKeyUp={props.onChangeHashTag}
              placeholder="태그를 입력하고 스페이스를 눌러주세요!"
            />
          </s.TagsWrapper>
          <s.HasgTagWrapper>
            {props.hashArr?.map((el: String, i: number) => (
              <s.HashItemWrapper key={uuidv4()}>
                <s.HashTag>{el}</s.HashTag>
                <s.HashButton type="button" onClick={props.onClickTagDelete(i)}>
                  x
                </s.HashButton>
              </s.HashItemWrapper>
            ))}
          </s.HasgTagWrapper>
        </s.InputWarpper>
        <s.LocationWarpper>
          <s.LocationMapWrapper>
            <s.InputText>거래위치</s.InputText>
            <s.LocationMap>
              <MapDetail
                address={props.address}
                setMapLatlng={props.setMapLatlng}
                data={props.data}
              />
            </s.LocationMap>
          </s.LocationMapWrapper>
          <div>
            <div>
              <s.InputText>GPS</s.InputText>
              <s.GpsWrapper>
                <s.LatLng>
                  {props.mapLatlng.lat ? props.mapLatlng.lat : "위도"}
                </s.LatLng>
                <s.GpsCenterIcon>icon</s.GpsCenterIcon>
                <s.LatLng>
                  {props.mapLatlng.lng ? props.mapLatlng.lng : "경도"}
                </s.LatLng>
              </s.GpsWrapper>
            </div>
            <div>
              <s.InputText>주소</s.InputText>
              <s.ShortInput
                type="txet"
                onClick={props.showModal}
                defaultValue={props.address}
              />
              <s.ShortInput2
                type="txet"
                {...props.register("useditemAddress.addressDetail")}
                defaultValue={
                  props.data?.fetchUseditem?.useditemAddress?.addressDetail ||
                  ""
                }
              />
            </div>
            {props.isModalVisible && (
              <Modal
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleOk}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </div>
        </s.LocationWarpper>
        <s.UploadWrapper>
          <s.InputText>사진첨부</s.InputText>
          <s.UploadButtonWrapper>
            {props.imageUrls?.map((el: String, index: number) => (
              <UploadContainer
                key={uuidv4()}
                imageUrls={el}
                index={index}
                onChangeFileUrl={props.onChangeFileUrl}
                onChangeEditFileUrl={props.onChangeEditFileUrl}
              />
            ))}
          </s.UploadButtonWrapper>
        </s.UploadWrapper>
        <s.FooterWrapper>
          <s.InputText>메인 사진 설정</s.InputText>
          <s.ImageWrapper>
            <s.ImageRadioWrapper>
              <s.ImageRadio type="radio" />
              <s.ImageRadioText>사진1</s.ImageRadioText>
            </s.ImageRadioWrapper>
            <s.ImageRadioWrapper>
              <s.ImageRadio type="radio" />
              <s.ImageRadioText>사진2</s.ImageRadioText>
            </s.ImageRadioWrapper>
          </s.ImageWrapper>
        </s.FooterWrapper>
        <div>
          <s.SubimtButton
            isActive={props.isEdit ? "" : props.formState.isValid}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </s.SubimtButton>
        </div>
      </s.FormWrapper>
    </s.BackGround>
  );
}
