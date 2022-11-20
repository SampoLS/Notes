import Breadcrumbs from "../../../components/Breadcrumbs";
import ShowPageContents from "../../../components/ShowPageContents";
import { asyncJsContents, contentsLength } from "./asyncJsContents";

const AsyncJs = () => {
  return (
    <>
      {asyncJsContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
      <Breadcrumbs path="asynchronous_js" length={contentsLength} />
    </>
  );
};
export default AsyncJs;
