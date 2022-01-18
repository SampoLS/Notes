import { useParams } from "react-router-dom";
import getSinglePageContents from "../utils/getSinglePageContents";

const SplitPage = ({ content }) => {
  const { pId } = useParams();
  switch (pId) {
    case "p2": {
      return getSinglePageContents(content, 15, 30);
    }
    case "p3": {
      return getSinglePageContents(content, 30, 45);
    }
    default:
      break;
  }
  return <h1>sorry</h1>;
};
export default SplitPage;
