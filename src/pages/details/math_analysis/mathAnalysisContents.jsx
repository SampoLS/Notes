import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const mathAnalysisContents = [
    {
        id: uuidv4(),
        title: "Mathematical analysis",
        isLargerTitle: true,
        path: "/math_analysis",
        url: `${wikiUrl}/Mathematical_analysis`,
        anchor: "Mathematical_analysis",
        text: {
          p1: <p>Analysis is the branch of mathematics dealing with continuous functions, limits, and related theories, such as differentiation, integration, measure, infinite sequences, series, and analytic functions.</p>
        },
    },
]

export const contentsLength = mathAnalysisContents.length;

let subpathContents = [];
export const mathAnalysisContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
   mathAnalysisContents 
);
