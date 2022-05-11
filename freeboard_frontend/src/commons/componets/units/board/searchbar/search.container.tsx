import SearchPresenter from "./search.presenter";
import { ISearchContainer } from "./search.types";

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
