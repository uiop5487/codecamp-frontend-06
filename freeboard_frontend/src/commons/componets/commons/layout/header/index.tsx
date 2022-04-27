import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./header.query";
import Head from "next/head";
import * as s from "./header.styles";
import { Modal } from "antd";

const HeaderPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [accessToken] = useRecoilState(accessTokenState);
  const [amount, setAmount] = useState(500);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const requestPay = () => {
    setIsModalVisible(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 가맹점 식별코드
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // 주석을 해주게 되면 랜덤으로 생성
        // merchant_uid: "ORD20180131-0000011",
        name: `${amount}P`,
        amount: amount,
        buyer_email: data?.fetchUsedLoggedIn?.email,
        buyer_name: data?.fetchUsedLoggedIn?.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_reditect_url: "http://localhost:3000/28-01-quiz/login-success",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          Modal.success({ content: "결제가 완료되었습니다." });
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하였습니다. 다시 시도해 주세요");
        }
      }
    );
  };

  const router = useRouter();

  const onClickMovePage = () => {
    router.push(`/boards`);
  };

  const onClickMoveLoginPage = () => {
    router.push(`/logins/login`);
  };

  const onClickMoveSignupPage = () => {
    router.push(`/logins/signup`);
  };

  const onClickMoveBasket = () => {
    router.push(`/mypage/basket`);
  };

  const onClickMoveMyPage = () => {
    router.push(`/mypage`);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onChangePay = (event) => {
    setAmount(event.target.value);
  };

  return (
    <s.Wrapper>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <s.HeaderTextWrapper>
        <s.HeaderImg src="/img/headericon.png" onClick={onClickMovePage} />
        <s.HeaderText onClick={onClickMovePage}>만리장성</s.HeaderText>
      </s.HeaderTextWrapper>
      {!accessToken ? (
        <s.SignupWrapper>
          <s.LoginButton onClick={onClickMoveLoginPage}>로그인</s.LoginButton>
          <s.SignupButton onClick={onClickMoveSignupPage}>
            회원가입
          </s.SignupButton>
        </s.SignupWrapper>
      ) : (
        <s.TrueWrapper>
          <s.UserWrapper>
            <s.UserIcon src="/img/userimg.png" onClick={onClickMoveMyPage} />
            <s.UserName onClick={onClickMoveMyPage}>
              {data?.fetchUserLoggedIn.name}
            </s.UserName>
          </s.UserWrapper>
          <s.PointText>
            <div>{data?.fetchUserLoggedIn.userPoint.amount}P</div>
          </s.PointText>
          <div>
            <s.BasketButton onClick={onClickMoveBasket}>
              장바구니
            </s.BasketButton>
          </div>
          <div>
            <s.PaymentButton onClick={showModal}>충전하기</s.PaymentButton>
          </div>
        </s.TrueWrapper>
      )}
      <s.CutomModal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={requestPay}
        onCancel={handleOk}
      >
        <s.PaymentWrapper>
          <s.PaymentTextWrapper>
            <s.PaymentText>충전하실 금액을 선택해주세요!!</s.PaymentText>
          </s.PaymentTextWrapper>
          <s.PaymentSelection name="포인트 선택" onChange={onChangePay}>
            <s.PaymentOption>100</s.PaymentOption>
            <s.PaymentOption>500</s.PaymentOption>
            <s.PaymentOption>1000</s.PaymentOption>
            <s.PaymentOption>2000</s.PaymentOption>
            <s.PaymentOption>5000</s.PaymentOption>
          </s.PaymentSelection>
        </s.PaymentWrapper>
      </s.CutomModal>
    </s.Wrapper>
  );
};

export default HeaderPage;
