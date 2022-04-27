import ProdcutCommentListItem from "./productcommentlist.items";

export default function ProdcutCommentListPresenter(props: any) {
  return (
    <div>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProdcutCommentListItem
          key={el._id}
          data={el}
          onClickShowEdit={props.onClickShowEdit}
          onChangeContents={props.onChangeContents}
          onClickDelete={props.onClickDelete}
          onClickShowAnswer={props.onClickShowAnswer}
          setQiestionId={props.setQiestionId}
          contents={props.contents}
        />
      ))}
    </div>
  );
}
