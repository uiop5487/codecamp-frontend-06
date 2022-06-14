import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  RefObject,
  SetStateAction,
} from "react";
import { Address } from "react-daum-postcode";
import {
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery, Maybe } from "../../../../types/generated/types";

export interface INewProductContainerProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  isEdit: boolean;
}

export interface IPorductData {
  name: string | undefined;
  remarks: string | undefined;
  price: Maybe<number> | undefined;
  contents: string | undefined;
  tags: Maybe<string[]> | undefined;
  useditemAddress: {
    addressDetail: Maybe<string> | undefined;
    address: string | undefined;
  };
}

export interface IStateMap {
  lat: string;
  lng: string;
}

export interface INewProductPresenterProps {
  register: UseFormRegister<IPorductData>;
  handleSubmit: UseFormHandleSubmit<IPorductData>;
  onClickSubmit: (data: IPorductData) => void;
  onClickTagDelete: (index: number) => () => void;
  onChangeEditFileUrl: (imageUrl: string, index: number) => void;
  onChangeFileUrl: (imageUrl: string) => void;
  onClickEdit: (data: IPorductData) => void;
  onChangeContents: (value: string) => void;
  showModal: () => void;
  handleOk: () => void;
  handleComplete: (data: Address) => void;
  setAddress: Dispatch<SetStateAction<string>>;
  getValues: UseFormGetValues<IPorductData>;
  setMapLatlng: Dispatch<SetStateAction<IStateMap>>;
  onChangeHashTag: (event: KeyboardEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  formState: FormState<IPorductData>;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  isEdit: boolean;
  contents: string;
  isModalVisible: boolean;
  address: string;
  mapLatlng: IStateMap;
  hashArr: String[];
}

export interface IUploadContainerProps {
  onChangeFileUrl: (imageUrl: string) => void;
  onChangeEditFileUrl: (imageUrl: string, index: number) => void;
  index: number;
  imageUrls: String;
}

export interface IUploadPresenterProps {
  imageUrls: String;
  onClickImage: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileRef: RefObject<HTMLInputElement>;
  onChangeEditFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
