import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const BackGround = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 80px 102px 80px 102px;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 80px;
`;

export const TitleText = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`;

export const InputWarpper = styled.div`
  width: 996px;
  padding-bottom: 40px;
`;

export const InputText = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 996px;
  height: 52px;
  padding: 14px 0px 14px 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const TagsInput = styled.input`
  border: 0px;
  padding-left: 14px;
  width: 600px;
`;

export const ContentsWarpper = styled.div`
  width: 996px;
  padding-bottom: 40px;
`;

export const Contents = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  font-size: 16px;
  padding-bottom: 40px;
`;

export const LocationWarpper = styled.div`
  display: flex;
  flex-direction: row;
  width: 996px;
  padding-bottom: 40px;
`;

export const LocationMapWrapper = styled.div`
  padding-right: 24px;
`;

export const LocationMap = styled.div`
  width: 384px;
  height: 252px;
`;

export const GpsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
`;

export const LatLng = styled.div`
  width: 158px;
  height: 52px;
  border: 1px solid #bdbdbd;
  text-align: center;
  line-height: 52px;
`;

export const GpsCenterIcon = styled.div`
  margin: 0px 21px 0px 21px;
`;

export const ShortInput = styled.input`
  width: 588px;
  height: 52px;
  padding: 14px 0px 14px 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const ShortInput2 = styled.input`
  width: 588px;
  height: 52px;
  padding: 14px 0px 14px 16px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
`;

export const UploadWrapper = styled.div`
  width: 996px;
  padding-bottom: 40px;
`;

export const UploadButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadButton = styled.div`
  width: 180px;
  height: 180px;
  background-color: gray;
  margin-right: 24px;
  font-size: 30px;
  text-align: center;
  line-height: 180px;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;

export const UploadImg = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 24px;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
`;

export const ImageRadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 24px;
`;

export const ImageRadio = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ImageRadioText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const FooterWrapper = styled.div`
  padding-bottom: 80px;
`;

interface IIsActive {
  isActive: boolean | string;
}

export const SubimtButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: IIsActive) => (props.isActive ? "darkred" : "")};
  color: ${(props: IIsActive) => (props.isActive ? "white" : "")};
  cursor: pointer;
`;

export const Error = styled.div`
  color: red;
  margin-top: 4px;
`;

export const HasgTagWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const HashTag = styled.div`
  margin-right: 10px;
  font-size: 15px;
  color: #bdbdbd;
  cursor: pointer;
`;

export const HashItemWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
`;

export const HashButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
