import ShowPageContents from "../../../components/ShowPageContents";
import { mathContents } from "./mathContents";

const MathPage = () => {
  return (
    <>
      {mathContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};

export default MathPage;
