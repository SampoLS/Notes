import { useParams } from "react-router-dom";
import ShowPageContents from "../../../../components/ShowPageContents";
import { csContents } from "../csContents";

// Get the single page contents based on the start index and end index.
const getSinglePageContents = (start, end) => {
  return (
    <>
      {csContents.slice(start,end).map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
}

export default function SplitPage() {
  const { pId } = useParams();
  switch (pId) {
    case "p2": {
      return getSinglePageContents(15, 30);
    }
    case "p3": {
      return getSinglePageContents(30,  45);
    }
    default:
      break;
  }
  return getSinglePageContents(0, 15);
}
