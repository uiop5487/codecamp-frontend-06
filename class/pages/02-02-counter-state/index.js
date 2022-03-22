// 리액트에서 제공해주는 기능
import { useState } from 'react'

export default function CounterStatePage () {
    const [count, setCount] = useState(0)

    function counter() {
        setCount(count + 1)
    }


    return (
        // 리액트는 하나의 묶음으로 내보내야함 - Fragment
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )


}
// let이 화면에 안보이는 사례
// import { useState } from 'react'

// export default function CounterStatePage(){
//     let count = 0

//     function counter(){
//         count = count + 1
//         console.log(count)
//     }

//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={counter}>카운트 올리기!!!</button>
//         </div>
//     )
// }


// 스코프체인 사례
// import { useState } from 'react'

// export default function CounterStatePage(){
//     let count = 0
//     const apple = 3

//     function counter(){

//         console.log(apple)

//         count = count + 1
//         console.log(count)
//     }

//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={counter}>카운트 올리기!!!</button>
//         </div>
//     )
// }