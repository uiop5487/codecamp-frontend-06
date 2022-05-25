export interface IPaginationProps {
  countdata: any;
  refetch: any;
}

export interface IPaginationPrecenter {
  onClickPage: (event: any) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  current: number;
  isActive: boolean;
}
