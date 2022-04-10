import { IPaginationPrecenter } from "./pagination.types";
import * as s from "./paginationstyles";

export const PaginationPrecenter = (props: IPaginationPrecenter) => {
  return (
    <s.BackGround>
      <s.PaginationWrapper>
        <s.NextButton
          onClick={props.onClickPrevPage}
          disabled={props.startPage === 1 ? true : false}
          isActive={props.startPage === 1 ? true : false}
        >
          이전
        </s.NextButton>
        {new Array(10).fill(1).map((_, index) =>
          index + props.startPage <= props.lastPage ? (
            <s.MyPage
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
              current={index + props.startPage === props.current}
            >
              {index + props.startPage}
            </s.MyPage>
          ) : (
            <span></span>
          )
        )}
        <s.NextButton
          onClick={props.onClickNextPage}
          disabled={props.startPage + 10 > props.lastPage ? true : false}
          isActive={props.startPage + 10 > props.lastPage ? true : false}
        >
          다음
        </s.NextButton>
      </s.PaginationWrapper>
    </s.BackGround>
  );
};

export default PaginationPrecenter;
