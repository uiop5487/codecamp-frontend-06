import { ChangeEvent } from "react";
import * as s from "./search.styles";

interface ISearchPresenter {
  onChageSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDateSearch: () => void;
}

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
