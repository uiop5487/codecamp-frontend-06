import { useRouter } from "next/router";

const StaticRoutingPage = () => {
    const router = useRouter();
    const OnclickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83011");
    };
    const OnclickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/83012");
    };
    const OnclickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/83013");
    };

    return (
        <div>
            <button onClick={OnclickMove1}>83011번 게시글로 이동하기</button>
            <button onClick={OnclickMove2}>83012번 게시글로 이동하기</button>
            <button onClick={OnclickMove3}>83013번 게시글로 이동하기</button>
        </div>
    );
};

export default StaticRoutingPage;
