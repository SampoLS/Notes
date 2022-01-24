/**
 *
 * @param {number} contentsLength The number of contents
 * @param {Array<object>} contents  The sorted contents in the array
 * @returns {Array<object>} The contents which path added the subpath
 */
const addSubpath = (subpathContents, contentsLength, contents) => {
  for (let i = 0; i < Math.ceil(contentsLength / 15); i++) {
    if (i === 0) {
      subpathContents.push(
        ...contents.slice(0, 15).map((item) => {
          return item;
        }),
      );
    }
    if (i !== 0) {
      subpathContents.push(
        ...contents.slice(i * 15, i * 15 + 15).map((item) => {
          item.path += "/p" + (i + 1);
          return item;
        }),
      );
    }
  }
  return subpathContents;
};
export default addSubpath;
