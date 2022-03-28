import { useState } from "react";
import { Rate } from "antd";

const LibraryStarPage = () => {
  const [value, setValue] = useState(3);
  const handleChange = (value) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
};
// 안트디자인 개발자가 만든 onchange임 밸류가 들어오게 됨
export default LibraryStarPage;
