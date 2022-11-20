import { memo } from "react/cjs/react.production.min";
import getSinglePageContents from "../utils/getSinglePageContents";

const IndexRoutePage = ({ content }) => {
  return getSinglePageContents(content, 0, 15);
};
export default memo(IndexRoutePage);
