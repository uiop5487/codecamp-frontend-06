import Head from "next/head";

export default function OpenGraphPage() {
  return (
    <div>
      <Head>
        {/* 내 사이트를 알릴때 사용 */}
        <meta property="og:title" content="나만의 사이트" />
        <meta property="og:description" content="나의 사이트의 온걸 환영해" />
        <meta property="og:image" content="이미지 주소" />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </div>
  );
}
