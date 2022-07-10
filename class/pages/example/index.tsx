import axios from "axios";
import { useState } from "react";

export default function Example() {
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const onClickRestApi = () => {
    axios
      .post("http://localhost:3001/tokens/phone", {
        phone: phone,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const onClickGetUsers = async () => {
    const result = await axios.get("http://localhost:3001/board");
    console.log(result.data);
    setUsers(result.data);
  };

  return (
    <div>
      <input type="text" onChange={onChangePhone} />
      <button onClick={onClickRestApi}>인증번호 보내기</button>
      <div>
        {users.map((el: any) => (
          <div key={el.number}>
            <div>{el.writer}</div>
            <div>{el.title}</div>
            <div>{el.contents}</div>
          </div>
        ))}
      </div>
      <button onClick={onClickGetUsers}>게시판 정보 가져오기</button>
    </div>
  );
}
