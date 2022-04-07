import axios from "axios";
import { useEffect, useState } from "react";
import PublicApiUI from "./publicapi.precenter";

const PublicApiContainerPage = () => {
  const [foodUrl, setFoodUrl] = useState("");

  useEffect(() => {
    const foodApi = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setFoodUrl(result.data.message);
    };
    foodApi();
  });
  return <PublicApiUI foodUrl={foodUrl} />;
};

export default PublicApiContainerPage;
