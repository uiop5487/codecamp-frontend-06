import styled from "@emotion/styled";
import { useState } from "react";

const MyPage = styled.span`
  padding-left: 100px;
  cursor: pointer;
`;

const Pagination = (props: any) => {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = (event: any) => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (event: any) => {
    if (startPage + 10 >= props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <MyPage onClick={onClickPrevPage}>이전 페이지</MyPage>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <MyPage
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {index + startPage}
          </MyPage>
        ) : (
          <span></span>
        )
      )}
      <MyPage onClick={onClickNextPage}>다음 페이지</MyPage>
    </div>
  );
};

export default Pagination;
