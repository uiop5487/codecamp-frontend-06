import axios from "axios";
import { useEffect, useState } from "react";
import PublicApiUI from "./publicapi.precenter";

const PublicApiContainerPage = () => {
  const [foodUrl, setFoodUrl] = useState<string[]>([]);

  useEffect(() => {
    const foodApi = async () => {
      new Array(9).fill(1).map(async (_) => {
        const result = await axios.get(
          "https://foodish-api.herokuapp.com/api/"
        );
        setFoodUrl((prev) => [...prev, result.data.image]);
      });
    };
    foodApi();
  }, []);
  return <PublicApiUI foodUrl={foodUrl} />;
};

export default PublicApiContainerPage;
