import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const Board = (props: any) => {
  return (
    <div>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          {/* <MyColumn></MyColumn> */}
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
};

export default Board;
