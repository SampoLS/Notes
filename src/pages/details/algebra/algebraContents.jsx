import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const algebraContents = [
    {
        id: uuidv4(),
        title: "Algebra",
        isLargerTitle: true,
        path: "/algebra",
        url: `${wikiUrl}/Algebra`,
        anchor: "Algebra",
        text: {
          p1: <p>Algebra is the study of variables and the rules for manipulating these variables in formulas; it is a unifying thread of almost all of mathematics.</p>
        },
    },
]

export const contentsLength = algebraContents.length;

let subpathContents = [];
export const algebraContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    algebraContents
);
