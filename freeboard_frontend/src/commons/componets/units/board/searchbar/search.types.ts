import { ChangeEvent } from "react";

export interface ISearchPresenter {
  onChageSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDateSearch: () => void;
}

export interface ISearchContainer {
  onChageSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDateSearch: () => void;
}
