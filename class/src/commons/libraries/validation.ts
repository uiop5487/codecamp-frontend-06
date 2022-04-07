export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 커요 5mb 제한");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png만 업로드 가능합니다.");
    return false;
  }

  return true;
};
