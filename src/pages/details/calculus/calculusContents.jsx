import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const calculusContents = [
    {
        id: uuidv4(),
        title: "Calculus",
        isLargerTitle: true,
        path: "/calculus",
        url: `${wikiUrl}/Calculus`,
        anchor: "Calculus",
        text: {
          p1: <p>Calculus, originally called infinitesimal calculus or "the calculus of infinitesimals", is the mathematical study of continuous change, in the same way that geometry is the study of shape, and algebra is the study of generalizations of arithmetic operations.</p>
        },
    },
]

export const contentsLength = calculusContents.length;

let subpathContents = [];
export const calculusContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    calculusContents
);
