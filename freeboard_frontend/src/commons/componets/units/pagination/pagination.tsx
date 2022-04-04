import { useState } from "react";
import PaginationPrecenter from "./paginationprecenter";

const Pagination = (props: any) => {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(props.countdata?.fetchBoardsCount / 10);
  const [current, setCurrent] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const onClickPage = (event: any) => {
    const current = Number(event.target.id);
    setCurrent(current);
    console.log(event.target.id);
    props.refetch({ page: current });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
    setCurrent((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 >= lastPage) {
      return;
    }
    setStartPage((prev) => prev + 10);
    setCurrent((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <PaginationPrecenter
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
      isActive={isActive}
    />
  );
};

export default Pagination;
