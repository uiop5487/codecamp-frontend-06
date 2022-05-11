export interface IBoardWriteUIProps {
  deleteButton: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickMoveToPage: (path: any) => () => void;
  data: any;
  router: any;
}
