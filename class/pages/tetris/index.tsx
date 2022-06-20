import styled from "@emotion/styled";
import { useState, useRef } from "react";

const Warpper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Block = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
`;

export default function Tetris() {
  const [widthBlock, setWidthBlock] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [heightBlock, setHeightBlock] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]);

  //   const widthBlockCount = 10;
  //   const heightBlockCount = 25;

  //   let stackedBlock = new Array(widthBlockCount);
  //   let controlBlock = new Array(widthBlockCount);

  //   const initBlockArray = (blockArray: any) => {
  //     for (let x = 0; x < widthBlockCount; x++) {
  //       blockArray[x] = new Array(heightBlockCount);
  //     }

  //     for (let x = 0; x < widthBlockCount; x++) {
  //       for (let y = 0; y < heightBlockCount; y++) {
  //         blockArray[x][y] = false;
  //       }
  //     }
  //   };

  //   initBlockArray(stackedBlock);
  //   initBlockArray(controlBlock);

  const ref = useRef<LegacyRef>(null);

  const canvas = ref.current;
  const ctx = canvas.getContext("2d");

  return (
    <>
      <canvas ref={canvas}></canvas>
    </>
  );
}
