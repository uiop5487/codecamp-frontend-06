import * as s from "./mypageside.style";

export default function MyPageSidePresenter() {
  return (
    <s.Wrapper>
      <s.MypageTitleWrapper>
        <s.MyPageTitle>MYPAGE</s.MyPageTitle>
      </s.MypageTitleWrapper>
      <s.UserIconWrapper>
        <s.UserIcon src="/img/usericonbig.png"></s.UserIcon>
        <s.UserName>유저이름</s.UserName>
        <s.UserPriceWrapper>
          <s.PriceIcon src="/img/priceicon.png"></s.PriceIcon>
          <s.Price>1000P</s.Price>
        </s.UserPriceWrapper>
      </s.UserIconWrapper>
      <s.FooterWrapper>
        <s.MyItemWrapper>
          <s.MyItemIcon src="/img/itemicon.png"></s.MyItemIcon>
          <s.MyItemText>내 장터</s.MyItemText>
        </s.MyItemWrapper>
        <s.MyPrice>
          <s.MyItemIcon src="/img/pointicon.png"></s.MyItemIcon>
          <s.MyItemText>내 포인트</s.MyItemText>
        </s.MyPrice>
        <s.MyProfile>
          <s.MyItemIcon src="/img/priceicon.png"></s.MyItemIcon>
          <s.MyItemText>내 프로필</s.MyItemText>
        </s.MyProfile>
      </s.FooterWrapper>
    </s.Wrapper>
  );
}
