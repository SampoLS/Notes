import ShowPageContents from "../components/ShowPageContents";

// Get the single page contents based on the start index and end index.
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
