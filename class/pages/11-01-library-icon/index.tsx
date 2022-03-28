import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(PlayCircleOutlined)`
  font-size: 50px;
  color: red;
`;

const LibraryIconPage = () => {
  //   return <PlayCircleOutlined />;
  return <MyIcon />;
};

export default LibraryIconPage;
