import * as s from "./search.styles";
import { ISearchPresenter } from "./search.types";

const SearchPresenter = (props: ISearchPresenter) => {
  return (
    <div>
      <s.SearchWarrper>
        <s.SearchBox onChange={props.onChageSearch}></s.SearchBox>
        <s.YearBox>
          <s.YearInput
            type="text"
            placeholder="0000.00.00"
            onChange={props.onChangeStartDate}
          />
          <s.YearInput
            type="text"
            placeholder="0000.00.00"
            onChange={props.onChangeEndDate}
          />
        </s.YearBox>
        <s.SearchButton onClick={props.onClickDateSearch}>
          검색하기
        </s.SearchButton>
      </s.SearchWarrper>
    </div>
  );
};

export default SearchPresenter;
