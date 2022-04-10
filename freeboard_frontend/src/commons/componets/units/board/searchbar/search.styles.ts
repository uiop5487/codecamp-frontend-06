import styled from "@emotion/styled";

export const SearchWarrper = styled.div`
  padding-top: 40px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchBox = styled.input`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  background-color: #f2f2f2;
  padding: 10px 0px 10px 10px;
`;

export const YearBox = styled.div`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  display: flex;
`;

export const YearInput = styled.input`
  width: 120px;
  border: 0px;
  text-align: center;
`;

export const SearchButton = styled.button`
  width: 92px;
  height: 52px;
  background-color: #f2f2f2;
  color: black;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
  }
`;
