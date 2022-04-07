import styled from "@emotion/styled";

const FoodImg = styled.img`
  width: 500px;
  height: 500px;
`;

const PublicApiUI = (props: any) => {
  return (
    <div>
      <FoodImg src={props.foodUrl} />
    </div>
  );
};

export default PublicApiUI;
