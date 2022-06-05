import { Dispatch, KeyboardEvent, SetStateAction } from "react";
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
  imageUrls: string[];
  onChangeFileUrl: (imageUrl: string) => void;
  formState: FormState<IPorductData>;
  onClickEdit: (data: IPorductData) => void;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  isEdit: boolean;
  onChangeContents: (value: string) => void;
  contents: string;
  isModalVisible: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleComplete: (data: Address) => void;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  getValues: UseFormGetValues<IPorductData>;
  setMapLatlng: Dispatch<SetStateAction<IStateMap>>;
  mapLatlng: IStateMap;
  onChangeHashTag: (event: KeyboardEvent<HTMLInputElement>) => void;
  hashArr: String[];
  onClickTagDelete: (index: number) => () => void;
  onChangeEditFileUrl: (imageUrl: string, index: number) => void;
}
