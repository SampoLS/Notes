import ShowPageContents from "../components/ShowPageContents";

/**
 *
 * @param {Array<object>} content The contents gonna slice to get the single page contents.
 * @param {number} start The start index to slice the contents.
 * @param {number} end The end index to slice the contents.
 * @returns {JSX}
 */

const getSinglePageContents = (content, start, end) => {
  return (
    <>
      {content.slice(start, end).map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};

export default getSinglePageContents;
