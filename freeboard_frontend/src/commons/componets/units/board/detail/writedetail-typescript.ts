import { NextRouter } from "next/router";

export interface IServerSideProps {
  writer: string;
  title: string;
  createdAt: string;
  boardAddress: {
    address: string;
    addressDetail: string;
  };
  images: string[];
  contents: string;
  youtubeUrl: string;
  likeCount: string;
  dislikeCount: string;
}

export interface IBoardWriteUIProps {
  deleteButton: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickMoveToPage: (path: string) => () => void;
  data: IServerSideProps;
  router: NextRouter;
}

export interface IBoardPageProps {
  data: IServerSideProps;
}
