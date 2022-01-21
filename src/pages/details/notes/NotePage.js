import ShowPageContents from "../../../components/ShowPageContents";
import { noteContents } from "./noteContents";

const NotePage = () => {
  return (
    <>
      {noteContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};
export default NotePage;
