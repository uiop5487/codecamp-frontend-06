export default function ProductListPresenter(props: any) {
  return (
    <div>
      <div>여기는 상품목록 페이지</div>
      <div>
        {props.data?.fetchUseditems.map((el: any) => (
          <div key={el._id}>
            <div onClick={props.onClickMoveDetail} id={el.name}>
              {el.name}
            </div>
            <div>{el.price}</div>
          </div>
        ))}
      </div>
      <button onClick={props.onClickMoveProductNew}>상품등록하러가기</button>
    </div>
  );
}
