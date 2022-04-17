export default function () {
  const onClickGetId = (id) => (event) => {
    console.log(id, event.target.value);
  };

  const getId = onClickGetId("any");

  return <input onChange={getId} type="text" />;
}
