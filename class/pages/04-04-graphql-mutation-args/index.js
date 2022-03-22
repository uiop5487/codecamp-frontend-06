// import axsios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

//묵음 배송 때문에 두번쓴다.
const CREATE_BOARD = gql`
        mutation createBoard($writer: String, $title: String, $contents: String) {
            createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
            }
        }
`


export default function GraphqlMutationPage() {

    const [myData, setMyData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)


    const callGraphqlApi = async () => {
        // const data = await axsios.get("https://koreanjson.com/posts/1")
        const result = await callApi({
            variables: { writer: "철수", title: "제목", contents: "내용이에요!!!" }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        setMyData(result.data.createBoard.message)
    }

    return (
        <div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
            <div>{myData}</div>
        </div>
    )


}