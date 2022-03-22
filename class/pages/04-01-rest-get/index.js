import axsios from 'axios'
import { useState } from 'react'

export default function RestGetPage() {

    const [myData, setMyData] = useState("")

    const callRestApi = async () => {
        const data = await axsios.get("https://koreanjson.com/posts/1")
        console.log(data)
        console.log(data.data.title)
        setMyData(data.data.title)
    }

    return (
        <div>
            <button onClick={callRestApi}>REST-API 요청하기</button>
            <div>{myData}</div>
        </div>
    )


}