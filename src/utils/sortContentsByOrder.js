// Sort the contents by ascending a-z.
export const sortContentsByOrder = (contents) => {
  const sortedContents = contents.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) return -1;
    return 0;
  });
  // Get the index of the content of the large title .
  const largeTitleIndex = sortedContents.findIndex(
    (item) => item.isLargerTitle === true,
  );
  // Delete the content of large title.
  const [largeTitle] = sortedContents.splice(largeTitleIndex, 1);
  // Add the content of large title to the first position.
  sortedContents.unshift(largeTitle);
  // Return the sorted contents.
  return sortedContents;
};
