import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    // 담아도 되 안 담아도 됨
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    console.log(map);
  }, []);

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2cd360c3fd9a1af9fe28dba59f6c7fcd"
        ></script>
      </Head>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}

// 2cd360c3fd9a1af9fe28dba59f6c7fcd
