import { useParams } from "react-router-dom";
import getSinglePageContents from "../utils/getSinglePageContents";

const SplitPage = ({ content }) => {
  const { pId } = useParams();
  const count = Number(pId.slice(1)) - 1;
  if (count) return getSinglePageContents(content, count * 15, count * 15 + 15);

  return <h1>sorry</h1>;
};
export default SplitPage;
