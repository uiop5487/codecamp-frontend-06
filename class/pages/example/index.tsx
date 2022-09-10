import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useCallback, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const ChatWrapper = styled.div`
  width: 600px;
  height: 100%;
  border: 1px solid black;
  background-color: #bdbdbd;
`;

const ChatInput = styled.input`
  width: 320px;
`;

const SendButton = styled.button`
  width: 80px;
`;

const Text = styled.div`
  color: red;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function SocketTest() {
  const [isActive, setIsActive] = useState(false);
  const [socket, setSocket] = useState<Socket>();
  const [message, setMessage] = useState("");
  // const [nickName, setNickName] = useState("");
  const [hostName, setHostName] = useState("");
  const [userName, setUserName] = useState("");
  const [host, setHost] = useState<any>([]);
  const [user, setUser] = useState<any>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const runnerId = "24e9ceca-59e7-42a8-823f-65c45c4c4c3f";
  const boardId = "97484c85-6d66-4130-b68e-e4cee907a3ca";
  const nickName = "김진성";

  useEffect(() => {
    const socket = io("http://localhost:4000/chat", {
      transports: ["websocket"],
      upgrade: false,
    });
    setSocket(socket);
  }, []);

  const onClickCreateRomm = async (e: any) => {
    const args: any[] = [1, 2];
    const result = socket?.emit("message", [nickName, runnerId, boardId]);
    // console.log(result);
    socket?.on("first" + boardId, (data) => {
      console.log(data);
    });
    // console.log(aaa);
    // console.log("========: ", aa);
    // console.log(result);
    setIsActive(true);
  };

  const onClickDisConnectButton = () => {
    setIsActive(false);
  };

  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    const nickName = "김진성";
    socket?.emit("send", "first" + boardId, nickName, message);
    // socket?.on("connect", () => {
    //   socket?.on("first" + boardId, (data) => {
    //     console.log("브로드캐스트", data);
    //   });
    // });
    socket?.on("send" + boardId, (data) => {
      console.log(data);
    });
    inputRef.current.value = "";
  };

  console.log(host);

  const onClickSend = async (e) => {
    await sendMessage();
    inputRef.current.value = "";
  };

  return (
    <div>
      <div>
        <button
          onClick={isActive ? onClickDisConnectButton : onClickCreateRomm}
        >
          채팅방 {isActive ? "나가기" : "생성"}
        </button>
        <div></div>
        <ChatInput type="text" ref={inputRef} onChange={onChangeMessage} />
        <SendButton onClick={sendMessage}>전송</SendButton>
      </div>
    </div>
  );
}
