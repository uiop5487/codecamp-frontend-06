// // import { gql, useMutation } from "@apollo/client";
// // import styled from "@emotion/styled";
// // import { useState } from "react";

import { ChangeEvent, useState } from "react";

// import { gql, useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";

// // const Image = styled.div`
// //   width: 200px;
// //   height: 200px;
// //   background-color: red;
// // `;

// // const Button = styled.div`
// //   width: 200px;
// //   height: 200px;
// //   background-color: black;
// // `;

// // const UPLOAD_FILE = gql`
// //   mutation uploadFile($file: Upload!) {
// //     uploadFile(file: $file) {
// //       url
// //     }
// //   }
// // `;

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

// export default function UploadMultiple() {
//   const aaa = useQuery(FETCH_BOARDS);
//   const bbb = useState("");
//   useEffect(() => {
//     console.log(aaa);
//   }, []);

//   const asdasd = () => {
//     bbb[1]("asd");
//   };

//   console.log(bbb);

//   // const [uploadFile] = useMutation(UPLOAD_FILE);
//   // const [image, setImage] = useState([""]);

//   // const onChangeImageFile = async (event: any) => {
//   //   const file = [...event.target.files];
//   //   file.map(async (el) => {
//   //     const result = await uploadFile({
//   //       variables: { file: el },
//   //     });
//   //     setImage((prev) => [result.data.uploadFile.url, ...prev]);
//   //   });
//   // };
//   return (
//     <div>
//       {/* <input type="file" onChange={onChangeImageFile} multiple />
//       {image.map((el) => (el ? <Image>{el}</Image> : <Button></Button>))} */}
//       <button onClick={asdasd}>asdasd</button>
//     </div>
//   );
// }

export default function Example() {
  const [state, setState] = useState("");

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 11) {
      return;
    }
    setState(event.target.value);
    if (event.target.value.length === 4) {
      setState((prev) => prev + ".");
    }
    if (event.target.value.length === 7) {
      setState((prev) => prev + ".");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={state || ""}
        onChange={onChangeDate}
        placeholder="0000.00.00"
      />
    </div>
  );
}
