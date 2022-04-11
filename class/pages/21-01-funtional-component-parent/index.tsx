import FunctionalComponentChildPage from "../21-02-funtional-component-child";

const FunctionalComponentParentPage = () => {
  //   return <FunctionalComponentChildPage count={123} />;
  return <>{FunctionalComponentChildPage({ count: 123 })}</>;
};

export default FunctionalComponentParentPage;
