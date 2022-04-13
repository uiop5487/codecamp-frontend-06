import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: white;
  font-size: 18px;
  width: 147px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const CenterText = styled.div`
  color: white;
  width: 147px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  border-left: solid 1px white;
  border-right: solid 1px white;
  /* padding: 0px 40px 0px 40px; */
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
