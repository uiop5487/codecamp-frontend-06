import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event) => {
    const file = event.target.filse?.[0];
    if (!file) {
      alert("파일이 없슴");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data?.target?.result);
        setImageUrl(data?.target?.result);
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
