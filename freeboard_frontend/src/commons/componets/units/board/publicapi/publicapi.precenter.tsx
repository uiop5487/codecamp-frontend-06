import styled from "@emotion/styled";

const FoodImg = styled.img`
  width: 500px;
  height: 500px;
`;

const PublicApiUI = (props: any) => {
  return (
    <div>
      <div>
        {props.foodUrl.map((el, index) => (
          <>
            <FoodImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </div>
  );
};

export default PublicApiUI;
