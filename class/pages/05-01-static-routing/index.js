import { useRouter } from "next/router";

const StaticRoutingPage = () => {
    const router = useRouter();
    const OnclickMove = () => {
        router.push("/05-02-static-routed");
    };

    return (
        <div>
            <button onClick={OnclickMove}>이동하기</button>
        </div>
    );
};

export default StaticRoutingPage;
