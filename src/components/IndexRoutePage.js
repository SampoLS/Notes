import getSinglePageContents from "../utils/getSinglePageContents";

const Subpage = ({ content }) => {
  return getSinglePageContents(content, 0, 15);
};
export default Subpage;
