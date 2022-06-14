import { useEffect } from "react";
import { IKakaoMapProps } from "./kakaomap.type";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapDetail(props: IKakaoMapProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=2cd360c3fd9a1af9fe28dba59f6c7fcd&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        // 지도를 생성할 때 필요한 기본 옵션
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 담아도 되 안 담아도 됨
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다
        // const aaa = props.data?.fetchUseditem.useditemAddress?.address

        geocoder.addressSearch(
          props.address
            ? `${props.address}`
            : props.data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${
                  props.address
                    ? `${props.address}`
                    : props.data?.fetchUseditem.useditemAddress?.address
                }</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);

              if (props.setMapLatlng) {
                props.setMapLatlng({
                  lat: result[0].y,
                  lng: result[0].x,
                });
              }
            }
          }
        );
      });
    };
  }, [props.address, props.data]);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
