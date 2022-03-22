export default function CounterDocumentPage () {

    function counter() {
        const resurt = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = resurt
    }


    return (
        // 리액트는 하나의 묶음으로 내보내야함 - Fragment
        <div>
            <div id="count">0</div>
            <button onclick={counter}>카운트 올리기!!!</button>
        </div>
    )


}