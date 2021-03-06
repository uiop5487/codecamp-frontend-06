import axios from "axios";
import { useState, useEffect } from "react";

const openApiuseEffectPage = () => {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  });
  return (
    <div>
      <div>오픈API 연습!!</div>;
      <img src={dogUrl} />
    </div>
  );
};

export default openApiuseEffectPage;
