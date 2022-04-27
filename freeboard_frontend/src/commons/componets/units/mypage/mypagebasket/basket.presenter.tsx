import MyPageSidePresenter from "../mypageside/mypageside.presenter";
import * as s from "./basket.styles";

export default function BasketPresenter(props: any) {
  return (
    <s.Aa>
      <MyPageSidePresenter />
      <s.BackGround>
        <s.Wrapper>
          <s.ListTitleWrapper>
            <s.ListTitle>번호</s.ListTitle>
            <s.ListCenterTitle>상품명</s.ListCenterTitle>
            <s.ListTitle>판매가격</s.ListTitle>
            <s.ListTitle>판매자</s.ListTitle>
            <s.ListTitle>날짜</s.ListTitle>
            <s.DivWrapper>
              <s.Div></s.Div>
            </s.DivWrapper>
          </s.ListTitleWrapper>
          {props?.basket?.map((el, index) => (
            <s.ButtonListWrapper key={el._id}>
              <s.ListWrapper id={el._id} onClick={props.onClickMoveDetail}>
                <s.ListEl>{index + 1}</s.ListEl>
                <s.ListCenterEl>{el?.name}</s.ListCenterEl>
                <s.ListEl>{el?.price}</s.ListEl>
                <s.ListEl>{el?.seller?.name}</s.ListEl>
                <s.ListEl>{el?.createdAt.slice(0, 10)}</s.ListEl>
              </s.ListWrapper>
              <s.ButtonWrapper>
                <s.DleteButton id={el?._id} onClick={props.onClickDelete(el)}>
                  X
                </s.DleteButton>
              </s.ButtonWrapper>
            </s.ButtonListWrapper>
          ))}
        </s.Wrapper>
      </s.BackGround>
    </s.Aa>
  );
}
