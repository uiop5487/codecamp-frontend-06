import { ChangeEvent } from "react";
import SearchPresenter from "./search.presenter";

interface ISearchContainer {
  onChageSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDateSearch: () => void;
}

const SearchContainer = (props: ISearchContainer) => {
  return (
    <SearchPresenter
      onChageSearch={props.onChageSearch}
      onChangeEndDate={props.onChangeEndDate}
      onChangeStartDate={props.onChangeStartDate}
      onClickDateSearch={props.onClickDateSearch}
    />
  );
};

export default SearchContainer;
