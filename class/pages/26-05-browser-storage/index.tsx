export default function BrowserStoragePage() {
  const onClikcSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };

  const onClikcSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClikcSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClikcLoadCookie = () => {
    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.includes("aaa="))[0]
      .replace("aaa=", "");
    console.log(myCookie);
  };

  const onClikcLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClikcLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClikcSaveCookie}>쿠키 저장</button>
      <button onClick={onClikcSaveLocal}>로컬 저장</button>
      <button onClick={onClikcSaveSession}>세션 저장</button>
      <br />
      =========================
      <br />
      <button onClick={onClikcLoadCookie}>쿠키 조회</button>
      <button onClick={onClikcLoadLocal}>로컬 조회</button>
      <button onClick={onClikcLoadSession}>세션 조회</button>
    </div>
  );
}
