import { useParams } from "react-router-dom";
import ShowPageContents from "../../../../components/ShowPageContents";
import { csContents } from "../csContents";

export default function SplitPage() {
  const { pId } = useParams();
  switch (pId) {
    case "p2": {
      return (
        <>
          {csContents.slice(15, 30).map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </>
      );
    }
    case "p3": {
      return (
        <>
          {csContents.slice(30, 45).map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </>
      );
    }
    default:
      break;
  }

  return (
    <>
      {csContents.slice(0, 15).map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
}
