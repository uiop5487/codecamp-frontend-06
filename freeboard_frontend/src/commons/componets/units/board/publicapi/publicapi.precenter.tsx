import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const FoodImg = styled.img`
  width: 500px;
  height: 500px;
`;

interface IPublicApiUI {
  foodUrl: string[];
}

const PublicApiUI = (props: IPublicApiUI) => {
  return (
    <div>
      <div>
        {props.foodUrl.map((el: string, index: number) => (
          <>
            <FoodImg key={uuidv4()} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </div>
  );
};

export default PublicApiUI;
