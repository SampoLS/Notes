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
    {
        id: uuidv4(),
        title: "Derivative",
        isLargerTitle: false,
        path: "/calculus",
        url: `${wikiUrl}/Derivative`,
        anchor: "Derivative",
        text: {
          p1: <p>In mathematics, the derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value). Derivatives are a fundamental tool of calculus. For example, the derivative of the position of a moving object with respect to time is the object's velocity: this measures how quickly the position of the object changes when time advances.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Differential calculus",
        isLargerTitle: false,
        path: "/calculus",
        url: `${wikiUrl}/Differential_calculus`,
        anchor: "Differential_calculus",
        text: {
          p1: <p>In mathematics, differential calculus is a subfield of calculus that studies the rates at which quantities change.[1] It is one of the two traditional divisions of calculus, the other being integral calculus—the study of the area beneath a curve.</p>
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
