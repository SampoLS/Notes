import ShowPageContents from "../../../components/ShowPageContents";
import { gitContents } from "./gitContents";

const GitPage = () => {
  return (
    <>
      {gitContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};
export default GitPage;
