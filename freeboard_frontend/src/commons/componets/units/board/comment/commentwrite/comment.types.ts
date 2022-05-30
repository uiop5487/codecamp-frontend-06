export interface ICommentUI {
  ratingValue: number;
  handleChange: (event: number) => void;
  submitBtn: (commentData: any) => void;
  handleSubmit: any;
  register: any;
  watch: (data: string) => void | string;
}

export interface IIsEdit {
  isEdit: boolean;
}
