import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

export const reduxToolkitContents = [
  {
    id: uuidv4(),
    title: "Redux Toolkit",
    isLargerTitle: true,
    path: "/redux_toolkit",
    url: "https://redux-toolkit.js.org/",
    anchor: "redux_toolkit",
    text: {
      p1: (
        <p>
          The official, opinionated, batteries-included toolset for efficient
          Redux development. Includes utilities to simplify common use cases
          like store setup, creating reducers, immutable update logic, and more.
        </p>
      ),
    },
  },
];

export const contentsLength = reduxToolkitContents.length;

let subpathContents = [];
export const reduxToolkitContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  reduxToolkitContents,
);
