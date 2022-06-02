import { ChangeEvent, Ref } from "react";

export interface IPropsUploadContainer {
  onChangeFileUrl: (imageUrl: string) => void;
  onChangeEditFileUrl: (imageUrl: string, index: number) => void;
  index: number;
  imageUrls: string;
}

export interface IPropsUploadPresenter {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEditFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImage: () => void;
  fileRef: Ref<HTMLInputElement>;
  imageUrls: string;
}
