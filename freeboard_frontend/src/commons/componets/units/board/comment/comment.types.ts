export interface ICommentUI {
  ratingValue: number;
  handleChange: (event: number) => void;
  submitBtn: (commentData: any) => void;
  handleSubmit: any;
  register: any;
}

export interface IIsEdit {
  isEdit: boolean;
}
