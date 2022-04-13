import { useParams } from "react-router-dom";
import { memo } from "react/cjs/react.production.min";
import getSinglePageContents from "../utils/getSinglePageContents";

const SplitPage = ({ content }) => {
  const { pId } = useParams();
  const count = Number(pId.slice(1)) - 1;
  // The start index.
  const start = count * 15;
  // The end index.
  const end = count * 15 + 15;
  if (count) return getSinglePageContents(content, start, end);
  return <h1>sorry</h1>;
};
export default memo(SplitPage);
