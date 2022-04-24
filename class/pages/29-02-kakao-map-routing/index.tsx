import Link from "next/link";

export default function KakaoMapPage() {
  // const router = useRouter();

  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };

  return (
    <div>
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기!!</a>
      </Link>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기!!</button> */}
      {/* <a href="/29-03-kakao-map-routed">맵으로 이동하기!!</a> */}
    </div>
  );
}

// 2cd360c3fd9a1af9fe28dba59f6c7fcd
