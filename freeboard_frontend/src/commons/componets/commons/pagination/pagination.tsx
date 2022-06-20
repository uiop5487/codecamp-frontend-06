import { MouseEvent, useEffect, useState } from "react";
import { IPaginationProps } from "./pagination.types";
import PaginationPrecenter from "./paginationprecenter";

const Pagination = (props: IPaginationProps) => {
  const [startPage, setStartPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  // const lastPage = Math.ceil(props.countdata?.fetchBoardsCount / 10);
  useEffect(() => {
    if (props.countdata?.fetchBoardsCount) {
      setLastPage(Math.ceil(props.countdata?.fetchBoardsCount / 10));
    }
  }, [props.countdata]);
  const [current, setCurrent] = useState(1);
  const [isActive] = useState(false);

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    const current = Number((event.target as HTMLDivElement).id);
    setCurrent(current);
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
